import express from "express";
import routes from "../routes";
import { getStudentsNew } from "../controllers/studentControllers";

const studentsRouter = express.Router();

studentsRouter.get(routes.studentsNew, getStudentsNew);

export default studentsRouter;