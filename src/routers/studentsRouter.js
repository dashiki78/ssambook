import express from "express";
import routes from "../routes";
import { getStudentsNew } from "../controllers/studentControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const studentsRouter = express.Router();

studentsRouter.get(routes.studentsNew, onlyPrivate, getStudentsNew);

export default studentsRouter;