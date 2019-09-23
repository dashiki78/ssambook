import express from "express";
import routes from "../routes";
import { home, changePassword } from "../controllers/globalControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.changePassword, changePassword);


export default globalRouter;