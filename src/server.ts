import "reflect-metadata";

import express from "express";

import createConnection from "./database";
import "./shared/container";
import { router } from "./routes/index";

const app = express();

createConnection();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is Running!"));
