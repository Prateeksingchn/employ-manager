import { Router } from "express";
import { internResponse } from "./interns.response.js";
import internsService from "./interns.service.js";

const internRouter = Router();

internRouter.get("/", (req, res, next) => {
    try {
        const result = internsService.getIntern();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

internRouter.post("/", (req, res, next) => {
    try {
        const result = internsService.createIntern(req.body);
        res.send(result);
    } catch (error) {
        next(error);
    }
});

internRouter.patch("/", (req, res, next) => {
    try {
        const result = internsService.editIntern(req.body);
        res.send(result);
    } catch (error) {
        next(error);
    }
});

internRouter.delete("/:id", (req, res, next) => {
    try {
        const result = internsService.deleteIntern(req.params.id);
        res.send(result);
    } catch (error) {
        next(error);
    }
});

export default internRouter;

