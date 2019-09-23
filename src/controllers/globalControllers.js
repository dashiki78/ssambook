export const home = (req, res) => {
    res.render("home", { pageTitle: "HOME"});
};

export const changePassword = (req, res) => {
    res.render("changePassword");
}