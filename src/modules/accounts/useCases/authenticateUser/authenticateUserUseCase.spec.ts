import { AppError } from "@errors/appError";

import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

let autheticateUserUseCase: AuthenticateUserUseCase;
let usersRepositotyInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositotyInMemory = new UsersRepositoryInMemory();

        autheticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositotyInMemory
        );

        createUserUseCase = new CreateUserUseCase(usersRepositotyInMemory);
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUsersDTO = {
            driver_license: "000123",
            email: "user@example.com",
            password: "password",
            name: "John Doe",
        };

        await createUserUseCase.execute(user);

        const result = await autheticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate notexisting user", async () => {
        expect(async () => {
            await autheticateUserUseCase.execute({
                email: "notexisting@example.com",
                password: "1234",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with incorrect password", async () => {
        expect(async () => {
            const user: ICreateUsersDTO = {
                driver_license: "0004321",
                email: "user@example.com.br",
                password: "just-a-password",
                name: "Jimmy Smith",
            };

            await createUserUseCase.execute(user);

            await autheticateUserUseCase.execute({
                email: user.email,
                password: "wrong-password",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
