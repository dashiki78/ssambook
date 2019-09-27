import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { getStudent } from "../controllers/apiControllers";

const apiRouter = express.Router();

apiRouter.get(routes.getStudent, onlyPrivate, getStudent);

export default apiRouter;