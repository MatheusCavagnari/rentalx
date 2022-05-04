interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationsDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
