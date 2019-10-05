import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { getStudent, getStudyUnit, getStudentName, getLessonDiaryList } from "../controllers/apiControllers";

const apiRouter = express.Router();

apiRouter.get(routes.getStudent, onlyPrivate, getStudent);
apiRouter.get(routes.getStudyUnit, onlyPrivate, getStudyUnit);
apiRouter.get(routes.getStudentName, onlyPrivate, getStudentName);
apiRouter.get(routes.getLessonDiaryList, onlyPrivate, getLessonDiaryList);

export default apiRouter;