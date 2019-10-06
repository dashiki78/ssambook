import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "SsamSsam";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
  };

  export const onlyPublic = (req, res, next) => {
    if (req.user) {
      res.redirect(routes.home);
    } else {
      next();
    }
  };
  
  export const onlyPrivate = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      req.flash("error", "인증된 유저만 사용가능합니다");
      res.redirect(routes.home);
    }
  };

  export const onlyAdmin = (req, res, next) => {
    if (req.user.email === process.env.ADMIN_EMAIL) {
      next();
    } else {
      req.flash("error", "경고합니다 관리권한이 없는데 접근하셨네요");
      res.redirect(routes.home);
    }
  }