import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { AppError } from "@errors/appError";
import "@shared/container";

import createConnection from "./database";
import { router } from "./routes/index";

const app = express();

createConnection();

app.use(express.json());
app.use(router);

// eslint-disable-next-line prettier/prettier
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.listen(3333, () => console.log("Server is Running!"));
