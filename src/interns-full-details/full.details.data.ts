import { FullDetailsData } from "./full.details.types.js";
import InternsSchema from "../interns-data/interns.schema.js";
import ScoresSchema from "../interns-scores/scores.schema.js";

class FullDetailsSchema {
    private static internsFullDetails: FullDetailsData[] = [];

    getAllFullDetailsData() {
        FullDetailsSchema.internsFullDetails = [];
        
        const internData = InternsSchema.getAllInternsFullData();
        
        // Initialize each intern with empty weeklyScores array
        for (const item of internData) {
            const { name, username, track, mentor, empId } = item;
            FullDetailsSchema.internsFullDetails.push({
                name,
                username,
                track,
                mentor,
                empId,
                weeklyScores: [], // Initialize empty array
                overallAvg: 0
            });
        }

        // Get all scores data
        const scoreData = ScoresSchema.getAll();
        
        // Add weekly scores to each intern
        for (const itemScore of scoreData) {
            const { empId, week, problemSolving, communication, logic, assignment, proActiveness, grasping, average } = itemScore;
            
            // Find the matching intern
            const intern = FullDetailsSchema.internsFullDetails.find(intern => intern.empId === empId);
            
            if (intern) {
                // Push this week's scores to the intern's weeklyScores array
                intern.weeklyScores.push({
                    week,
                    problemSolving,
                    communication,
                    logic,
                    assignment,
                    proActiveness,
                    grasping,
                    weeklyAvg: average
                });
            }
        }

        // Calculate overall average for each intern
        for (const intern of FullDetailsSchema.internsFullDetails) {
            if (intern.weeklyScores.length > 0) {
                const totalAvg = intern.weeklyScores.reduce((sum, weekScore) => sum + weekScore.weeklyAvg, 0);
                intern.overallAvg = totalAvg / intern.weeklyScores.length;
            } else {
                intern.overallAvg = 0;
            }
        }

        return FullDetailsSchema.internsFullDetails;
    }
}

export default new FullDetailsSchema();