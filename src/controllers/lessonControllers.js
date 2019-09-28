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

export const getNewLesson = async (req, res) => {
    const {
        params : { student_id, date },
        query : { name } 
    } = req;
    console.log(student_id, date, name);
    res.render("lesson/lessonNewDiary", { student_id, date, name });
}