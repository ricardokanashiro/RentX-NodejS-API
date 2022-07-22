import { Category } from "../../entities/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
    async list(): Promise<Category[]> {
        const all = this.categories;
        return all;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const newCategory = new Category();

        Object.assign(newCategory, { name, description });

        this.categories.push(newCategory);
    }
}

export { CategoriesRepositoryInMemory };
