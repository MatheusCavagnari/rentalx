import { ISpecificationsRepository } from "../repositories/ISpecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) { }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Spefication already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationService };
