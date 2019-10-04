import express from "express";
import routes from "../routes";
import { onlyAdmin } from "../middlewares";
import { getInsertUnit, postInsertUnit } from "../controllers/adminControllers";

const adminRouter = express.Router();

adminRouter.get(routes.insertUnit, onlyAdmin, getInsertUnit);
adminRouter.post(routes.insertUnit, onlyAdmin, postInsertUnit);

export default adminRouter;
