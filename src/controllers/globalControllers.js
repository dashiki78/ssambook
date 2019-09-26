import passport from "passport";
import User from "../models/User";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "HOME"});
};

export const getJoin = (req, res) => {
    res.render("join");
};

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        req.flash("error", "비밀번호가 일치하지 않습니다");
        res.status(400);
        res.render("join");
    } else {
        try {
            const user = await User({
                nickName: name,
                email
            });
            await User.register(user, password);
            next();            
        } catch (error) {
            console.log(error);
            if (error.name === 'UserExistsError') {
                req.flash("error", "이미 가입된 유저입니다");
            }
            res.redirect(routes.home);
        }
    }
};

export const getLogin = (req, res) => {
    res.render("login");
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
  successFlash: "환영합니다",
  failureFlash: "로그인에 실패하였습니다. 이메일 또는 비밀번호를 확인하세요"
});

export const logout = (req, res) => {
    req.flash("info", "로그아웃 되었습니다");
    req.logout();
    res.redirect(routes.home);
  };

export const getEditProfile = (req, res) => {
    res.render("editProfile");
};

export const postEditProfile = async (req, res) => {
    const {
        body : { name, email }
    } = req;
    try {
        await User.findByIdAndUpdate(req.user.id, {
            nickName: name,
            email
        });
        req.flash("success", "회원정보가 수정되었습니다");
        res.redirect(routes.home);
    } catch (error) {
        req.flash("erroe", "회원정보가 수정되지 않았습니다");
        res.redirect(routes.editProfile);
    }
};

export const changePassword = (req, res) => {
    res.render("changePassword");
}