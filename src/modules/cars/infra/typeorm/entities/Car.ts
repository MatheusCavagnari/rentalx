import { v4 as uuidV4 } from "uuid";

class Car {
  id: string;

  name: string;

  description: number;

  avaliable: boolean;

  lincense_place: string;

  fine_amount: number;

  branch: string;

  category_id: string;

  created_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.avaliable = true;
      this.created_at = new Date();
    }
  }
}

export { Car };
