import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    lincense_place,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      lincense_place,
      name,
    });

    await this.repository.save(car);
    return car;
  }
  async findByLincensePlate(lincense_place: string): Promise<Car> {
    const car = await this.repository.findOne({
      lincense_place,
    });
    return car;
  }
}

export { CarsRepository };
