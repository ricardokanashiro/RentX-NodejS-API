import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
    // eslint-disable-next-line prettier/prettier
    create(data: ICreateUsersDTO);
}

export { IUsersRepository };
