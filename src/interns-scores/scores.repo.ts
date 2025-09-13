import scoresSchema from "./scores.schema.js";
import { weeklyEval } from "./scores.types.js";

const getAllInterns = () => scoresSchema.getAll();

const createIntern = (score: weeklyEval) => scoresSchema.create(score);

export default{
  getAllInterns, 
  createIntern,
}



