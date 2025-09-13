import { HomepageData } from "../homepage-data/homepage.employee.details.types.js";
import { FullDetailsData } from "../interns-full-details/full.details.types.js";
import { EmployData } from "./interns.types.js"

class InternSchema {
    private static interns: EmployData[] = []
    private static homepageData: HomepageData[] = []
    private static fullDetailsData: FullDetailsData[] = []
    
    getAll() {
        return InternSchema.interns;
    }

    getAllInternsData() {
        for (const { name, mentor, empId } of InternSchema.interns) {
            InternSchema.homepageData.push({ name, mentor, empId });
        }
        return InternSchema.homepageData;
    }

    getAllInternsFullData() {
        for (const { name, username, track, mentor, empId } of InternSchema.interns) {
            InternSchema.fullDetailsData.push({ 
                name, 
                username, 
                track, 
                mentor, 
                empId,
                weeklyScores: [],
                overallAvg: 0
            });
        }
        return InternSchema.fullDetailsData;
    }


    create(intern: EmployData) {
        InternSchema.interns.push(intern);
    }

    edit(intern: EmployData) {
        const { empId } = intern;
        const internIndex = InternSchema.interns.findIndex(intern => intern.empId === empId);

        if (internIndex === -1) return false;

        InternSchema.interns[internIndex] = { ...InternSchema.interns[internIndex], ...intern };

        return true;
    }

    delete(id: string) {
        const internIndex = InternSchema.interns.findIndex(intern => intern.empId === parseInt(id));
        if (internIndex === -1) return false;

        InternSchema.interns.splice(internIndex, 1)

        return true;
    }
}

export default new InternSchema();