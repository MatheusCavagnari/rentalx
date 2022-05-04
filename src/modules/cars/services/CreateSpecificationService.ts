import { ISpecificationsRepository } from "../repositories/ISpecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private specificationsRepository: ISpecificationsRepository) { }
    execute({ name, description }: IRequest): void {
        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateCategoryService };
