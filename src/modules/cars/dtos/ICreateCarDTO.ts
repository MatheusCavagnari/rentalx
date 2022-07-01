import { Specification } from "../infra/typeorm/entities/Specification";

interface ICreateCarDTO {
  name: string;
  description: string;
  daily_rate: number;
  lincense_place: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  id?: string;
  specifications?: Specification[];
}

export { ICreateCarDTO };
