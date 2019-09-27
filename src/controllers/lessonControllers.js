import LessonDiary from "../models/LessonDiary";
import Students from "../models/Students";
import routes from "../routes";

export const configLesson = async (req, res) => {
    try {
        const students = await Students.find({teacher: req.user.id});
        res.render("lesson/lessonConfig", { students: students });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(routes.home);
    }    
};

export const getNewLesson = (req, res) => {
    res.render("lesson/lessonNewDiary");
}