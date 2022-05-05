import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private CreateCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.CreateCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
