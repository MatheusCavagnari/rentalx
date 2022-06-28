import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  async create({
    name,
    description,
    brand,
    category_id,
    daily_rate,
    fine_amount,
    lincense_place,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_amount,
      lincense_place,
    });

    this.cars.push(car);
    return car;
  }

  async findByLincensePlate(lincense_place: string): Promise<Car> {
    return this.cars.find((car) => car.lincense_place === lincense_place);
  }
}

export { CarsRepositoryInMemory };
