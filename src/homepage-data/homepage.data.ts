import { HomepageData } from "./homepage.employee.details.types";
import { EmployData } from "../interns-data/interns.types";
import InternsSchema from "../interns-data/interns.schema";
import scoresSchema from "../interns-scores/scores.schema";
class HomepageSchema {
    private static internsHomePageDetails: HomepageData[] = []

    getAllEmployeesData() {
        const internData = InternsSchema.getAllInternsData();
        
        for (const item of internData) {
            const { name, mentor, empId } = item;
            HomepageSchema.internsHomePageDetails.push({
                name: name,
                mentor: mentor,
                empId: empId
            });

        }
        let scoreData = scoresSchema.getAll();
        for (const itemScore of scoreData) {
            const { empId, average } = itemScore;
            const addingAvgInHomePage = HomepageSchema.internsHomePageDetails.find(intern => intern.empId === empId);
            if (addingAvgInHomePage) {
                addingAvgInHomePage["avgScore"] = average;
            }
        }
        return HomepageSchema.internsHomePageDetails;
    }
}

export default new HomepageSchema();


