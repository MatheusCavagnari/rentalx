import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRespository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationREpository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationREpository
    );

    createSpecificationService.execute({ name, description });
    return response.status(201).send();
});

export { specificationsRoutes };
