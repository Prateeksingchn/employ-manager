import { weeklyEval } from "./scores.types";


class ScoresSchema {
    private static score: weeklyEval[] = []

    getAll() {

        for(const internScore of ScoresSchema.score) {
            let averageScore = (internScore.problemSolving + internScore.proActiveness + internScore.logic + internScore.grasping + internScore.communication + internScore.assignment) / 6;

            internScore.average = averageScore;
        }
        return ScoresSchema.score;
    }
    
    create(scores: weeklyEval) {
        ScoresSchema.score.push(scores);
        return true;
    }
}

export default new ScoresSchema();

