import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { getStudent, getStudyUnit } from "../controllers/apiControllers";

const apiRouter = express.Router();

apiRouter.get(routes.getStudent, onlyPrivate, getStudent);
apiRouter.get(routes.getStudyUnit, onlyPrivate, getStudyUnit);

export default apiRouter;