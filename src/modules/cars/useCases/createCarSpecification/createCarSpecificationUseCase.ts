import { inject } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    // @inject("CarRepository")
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carExist = await this.carsRepository.findById(car_id);

    if (!carExist) {
      throw new AppError("Car does not exists!");
    }
    const specification = await this.specificationsRepository.findByIds(
      specification_id
    );

    carExist.specifications = specification;

    await this.carsRepository.create(carExist);
  }
}

export { CreateCarSpecificationUseCase };
