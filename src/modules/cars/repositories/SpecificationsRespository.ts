import { Specification } from "../model/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationsDTO,
} from "./ISpecificatiosRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private specification: Specification[];

    constructor() {
        this.specification = [];
    }

    create({ description, name }: ICreateSpecificationsDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specification.push(specification);
    }
}

export { SpecificationRepository };
