import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { configLesson, getNewLesson, postNewLesson, getEditLesson, postEditLesson, getSearchLesson } from "../controllers/lessonControllers";

const lessonRouter = express.Router();

lessonRouter.get(routes.lessonConfig, onlyPrivate, configLesson);
lessonRouter.get(routes.lessonNew, onlyPrivate, getNewLesson);
lessonRouter.post(routes.lessonNew, onlyPrivate, postNewLesson);
lessonRouter.get(routes.lessonEdit(), onlyPrivate, getEditLesson);
lessonRouter.post(routes.lessonEdit(), onlyPrivate, postEditLesson);
lessonRouter.get(routes.lessonSearch, onlyPrivate, getSearchLesson);

export default lessonRouter;