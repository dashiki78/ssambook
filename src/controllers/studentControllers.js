import Students from '../models/Students';
import routes from "../routes";

export const getStudentsNew = (req, res) => {
    res.render("newStudents");
};