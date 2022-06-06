import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
        // eslint-disable-next-line prettier/prettier
        const { name, username, email, driver_license, password } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            name,
            username,
            email,
            driver_license,
            password,
        });

        return response.status(200).send();
    }
}

export { CreateUserController };
