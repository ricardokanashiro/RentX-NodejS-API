import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create({ driver_license, email, name, password }: ICreateUsersDTO) {
        const newUser = new User();

        Object.assign(newUser, { driver_license, email, name, password });

        this.users.push(newUser);
    }
    async findByEmail(email: string): Promise<User> {
        const foundUser = this.users.find((user) => user.email === email);
        return foundUser;
    }
    async findById(id: string): Promise<User> {
        const foundUser = this.users.find((user) => user.id === id);
        return foundUser;
    }
}

export { UsersRepositoryInMemory };
