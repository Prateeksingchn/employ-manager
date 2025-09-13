import { scoresResponse } from "./scores.response.js";
import { weeklyEval } from "./scores.types.js";
import scoresRepo from "./scores.repo.js";

const getInterns = () => scoresRepo.getAllInterns();

const createScores = (employ: weeklyEval) => {
    scoresRepo.createIntern(employ);
    return scoresResponse.SCORES_CREATED_SUCCESSFUL.message;
}

export default {
    getInterns,
    createScores,
}