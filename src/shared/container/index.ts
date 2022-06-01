import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/infra/repositories/UserRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "../../modules/cars/infra/repositories/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/infra/repositories/SpecificationsRespository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificatiosRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
