import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationsDTO,
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    // eslint-disable-next-line prettier/prettier
    async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });

        return specification;
    }
}

export { SpecificationRepository };
