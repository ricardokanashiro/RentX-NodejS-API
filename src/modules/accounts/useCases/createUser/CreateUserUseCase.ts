import { inject, injectable } from "tsyringe";

import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    // eslint-disable-next-line prettier/prettier
    async execute({ name, username, email, driver_license, password }: ICreateUsersDTO) {
        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });
    }
}

export { CreateUserUseCase };
