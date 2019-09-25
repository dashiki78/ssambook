import express from "express";
import routes from "../routes";
import { getStudentsNew, postStudentsNew } from "../controllers/studentControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const studentsRouter = express.Router();

studentsRouter.get(routes.studentsNew, onlyPrivate, getStudentsNew);
studentsRouter.post(routes.studentsNew, onlyPrivate, postStudentsNew);

export default studentsRouter;