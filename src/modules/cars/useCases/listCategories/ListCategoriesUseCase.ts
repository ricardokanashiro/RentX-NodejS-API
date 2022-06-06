import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoryRepository
    ) {}

    execute(): Promise<Category[]> {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
