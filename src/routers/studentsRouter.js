import express from "express";
import routes from "../routes";
import { getStudentsNew, postStudentsNew, studentsList, getEditStudent, postEditStudent, deleteStudent } from "../controllers/studentControllers";
import { onlyPrivate } from "../middlewares";

const studentsRouter = express.Router();

studentsRouter.get(routes.studentsNew, onlyPrivate, getStudentsNew);
studentsRouter.post(routes.studentsNew, onlyPrivate, postStudentsNew);
studentsRouter.get(routes.studentsList, onlyPrivate, studentsList);
studentsRouter.get(routes.studentsEdit(), onlyPrivate, getEditStudent);
studentsRouter.post(routes.studentsEdit(), onlyPrivate, postEditStudent);
studentsRouter.get(routes.studentsDelete(), onlyPrivate, deleteStudent);

export default studentsRouter;