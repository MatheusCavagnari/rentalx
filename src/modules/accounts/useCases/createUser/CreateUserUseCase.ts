import { inject } from "tsyringe";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository // eslint-disable-next-line prettier/prettier
  ) { }

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    await this.userRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
