import { Application, Request, Response, NextFunction, json } from "express";
import { routes } from './routes.data.js'
import { ResponseHandler } from "../utility/response-handler.js";

export const registeredMiddleware = (app: Application) => {
    app.use(json());

    for(const { path, router } of routes) {
        app.use(path, router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500).send(new ResponseHandler(null, err));
    })
}