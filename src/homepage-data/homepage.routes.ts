import { Router } from "express";
import HomepageSchema from "./homepage.data.js"
const internDetailsRouter = Router();

internDetailsRouter.get("/", (req, res, next) => {
    try {
        const result = HomepageSchema.getAllEmployeesData();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

export default internDetailsRouter;

