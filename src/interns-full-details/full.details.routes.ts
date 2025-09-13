import { Router } from "express";
import FullDetailsSchema from "./full.details.data.js";

const fullDetailsRouter = Router();

fullDetailsRouter.get("/", (req, res, next) => {
    try {
        const result = FullDetailsSchema.getAllFullDetailsData();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

export default fullDetailsRouter;
