import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private CreateCategoryUseCase: CreateCategoryUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.CreateCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
