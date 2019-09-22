import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "SsamBook";
    res.locals.routes = routes;
    next();
  };