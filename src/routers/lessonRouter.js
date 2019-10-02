import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { configLesson, getNewLesson, postNewLesson } from "../controllers/lessonControllers";

const lessonRouter = express.Router();

lessonRouter.get(routes.lessonConfig, onlyPrivate, configLesson);
lessonRouter.get(routes.lessonNew, onlyPrivate, getNewLesson);
lessonRouter.post(routes.lessonNew, onlyPrivate, postNewLesson);

export default lessonRouter;