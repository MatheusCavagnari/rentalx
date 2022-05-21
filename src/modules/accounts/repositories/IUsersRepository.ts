import { ICreateUsersDTO } from "../dtos/ICreateUserDTO";

interface IUserRepository {
  create(data: ICreateUsersDTO): Promise<void>;
}

export { IUserRepository };
