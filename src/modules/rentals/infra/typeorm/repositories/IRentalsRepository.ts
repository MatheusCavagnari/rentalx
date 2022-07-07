import { ICreateRentalDTO } from "../../../dtos/ICreateRentalDTO";
import { Rental } from "../entities/Rental";

interface IRentalsRepository {
  findOpenRenatalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  create(data: ICreateRentalDTO): Promise<Rental>;
}

export { IRentalsRepository };
