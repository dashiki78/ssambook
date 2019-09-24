import express from "express";
import routes from "../routes";
import { home, changePassword, getJoin, postJoin, getLogin, postLogin, logout, getEditProfile, postEditProfile } from "../controllers/globalControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
globalRouter.post(routes.editProfile, onlyPrivate, postEditProfile);
globalRouter.get(routes.changePassword, changePassword);


export default globalRouter;