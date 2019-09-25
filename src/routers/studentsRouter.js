import express from "express";
import routes from "../routes";
import { getStudentsNew, postStudentsNew, studentsList } from "../controllers/studentControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const studentsRouter = express.Router();

studentsRouter.get(routes.studentsNew, onlyPrivate, getStudentsNew);
studentsRouter.post(routes.studentsNew, onlyPrivate, postStudentsNew);
studentsRouter.get(routes.studentsList, onlyPrivate, studentsList);

export default studentsRouter;