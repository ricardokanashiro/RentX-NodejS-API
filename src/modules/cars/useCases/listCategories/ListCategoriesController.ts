import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    handle(request: Request, response: Response): Response {
        const listCategoryUseCase = container.resolve(ListCategoriesUseCase);

        const all = listCategoryUseCase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController };
