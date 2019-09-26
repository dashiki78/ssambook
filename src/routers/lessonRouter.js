import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { configLesson } from "../controllers/lessonControllers";

const lessonRouter = express.Router();

lessonRouter.get(routes.lessonConfig, onlyPrivate, configLesson);

export default lessonRouter;