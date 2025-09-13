import { FullDetailsData } from "./full.details.types.js";
import InternsSchema from "../interns-data/interns.schema.js";
import ScoresSchema from "../interns-scores/scores.schema.js";

class FullDetailsSchema {
    private static internsFullDetails: FullDetailsData[] = [];

    getAllFullDetailsData() {
        // Clear previous data to avoid duplicates
        // FullDetailsSchema.internsFullDetails = [];
        
        // Get all interns full data (name, username, track, mentor, empId)
        const internData = InternsSchema.getAllInternsFullData();
        
        // Push all intern details to full details array
        for (const item of internData) {
            const { name, username, track, mentor, empId } = item;
            FullDetailsSchema.internsFullDetails.push({
                name: name,
                username: username,
                track: track,
                mentor: mentor,
                empId: empId
            });
        }

        // Get all scores data and merge with intern details
        let scoreData = ScoresSchema.getAll();
        
        for (const itemScore of scoreData) {
            const { empId, problemSolving, communication, logic, assignment, proActiveness, grasping, average } = itemScore;
            
            // Find matching intern by empId and add scores
            const addingScoresInFullDetails = FullDetailsSchema.internsFullDetails.find(intern => intern.empId === empId);
            if (addingScoresInFullDetails) {
                addingScoresInFullDetails["problemSolving"] = problemSolving;
                addingScoresInFullDetails["communication"] = communication;
                addingScoresInFullDetails["logic"] = logic;
                addingScoresInFullDetails["assignment"] = assignment;
                addingScoresInFullDetails["proActiveness"] = proActiveness;
                addingScoresInFullDetails["grasping"] = grasping;
                addingScoresInFullDetails["average"] = average;
            }
        }

        return FullDetailsSchema.internsFullDetails;
    }
}

export default new FullDetailsSchema();
