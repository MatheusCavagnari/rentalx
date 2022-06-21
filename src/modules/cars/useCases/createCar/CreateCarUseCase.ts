import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  lincense_place: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository // eslint-disable-next-line prettier/prettier
  ) { }

  async execute({
    name,
    description,
    daily_rate,
    lincense_place,
    fine_amount,
    brand,
    category_id,
  }: IRequest): Promise<void> {
    this.carsRepository.create({
      name,
      description,
      daily_rate,
      lincense_place,
      fine_amount,
      brand,
      category_id,
    });
  }
}

export { CreateCarUseCase };
