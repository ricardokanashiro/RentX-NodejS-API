import { getRepository } from "typeorm";

import { Category } from "./src/modules/cars/entities/Category";

const myRepo = getRepository(Category);

console.log(myRepo);
