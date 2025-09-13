export interface WeeklyScore {
    week: number;
    problemSolving: number;
    communication: number;
    logic: number;
    assignment: number;
    proActiveness: number;
    grasping: number;
    weeklyAvg: number;
}

export interface FullDetailsData {
    name: string;
    username: string;
    track: string;
    mentor: string;
    empId: number;
    weeklyScores: WeeklyScore[]; 
    overallAvg: number; 
}