import { internResponse } from "./interns.response.js";
import { EmployData } from "./interns.types.js";2
import internsRepo from "./interns.repo.js";

const getIntern = () => internsRepo.getAllInterns();

const createIntern = (employ: EmployData) => {
    internsRepo.createIntern(employ);
    return internResponse.INTERN_CREATED_SUCCESSFUL.message;
}

const editIntern = (employ: EmployData) => {
    const didUpdate = internsRepo.editInterns(employ);

    if(!didUpdate) return internResponse.INTERN_NOT_FOUND.message;

    return internResponse.INTERN_EDITED_SUCCESSFUL.message;
}

const deleteIntern = (id: string) => {
    const didDelete = internsRepo.deleteInterns(id);

    if(!didDelete) return internResponse.INTERN_NOT_FOUND.message;

    return internResponse.INTERN_DELETED_SUCCESSFUL.message;
}

export default {
    getIntern,
    createIntern,
    editIntern,
    deleteIntern
}

