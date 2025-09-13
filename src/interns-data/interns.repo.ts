import internsSchema from "./interns.schema.js";
import { EmployData } from "./interns.types.js";

const getAllInterns = () => internsSchema.getAll();

const createIntern = (intern: EmployData) => internsSchema.create(intern);

const editInterns = ( intern: EmployData ) => internsSchema.edit(intern);

const deleteInterns = (id: string) => internsSchema.delete(id);

export default{
  getAllInterns, 
  createIntern,
  editInterns,
  deleteInterns
}


