import { Router } from "express";
import { scoresResponse } from "./scores.response.js";
import scoresService from "./scores.service.js";

const scoreRouter = Router();

scoreRouter.get("/", (req, res, next) => {
    try {
        const result = scoresService.getInterns();
        res.send(result);
    } catch (error) {
        next(error);
    }
});

scoreRouter.post("/", (req, res, next) => {
    try {
        const result = scoresService.createScores(req.body);
        res.send(result);
    } catch (error) {
        scoresResponse.SCORES_CREATED_SUCCESSFUL.status;
    }
});

export default scoreRouter;