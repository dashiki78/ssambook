import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { getStudent, getStudyUnit, getStudentName } from "../controllers/apiControllers";

const apiRouter = express.Router();

apiRouter.get(routes.getStudent, onlyPrivate, getStudent);
apiRouter.get(routes.getStudyUnit, onlyPrivate, getStudyUnit);
apiRouter.get(routes.getStudentName, onlyPrivate, getStudentName);

export default apiRouter;