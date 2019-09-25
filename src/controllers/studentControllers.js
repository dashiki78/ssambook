import Students from '../models/Students';
import routes from "../routes";

export const getStudentsNew = (req, res) => {
    res.render("newStudents");
};

export const postStudentsNew = async (req, res) => {
    const {
        body: {
            studentName,
            studentSchool,
            studentGrade,
            registrationDate,
            note,
            studentStatus,
            lessonDay,
            tel
        }
    } = req;
    try {
        const newStudent = await Students.create({
            name: studentName,
            grade: studentGrade,
            school: studentSchool,
            tel: tel,
            registrationDate: registrationDate,
            note: note,
            lessonDay: lessonDay,
            status: studentStatus,
            teacher: req.user.id
        });
        req.user.students.push(newStudent.id);
        req.user.save();
        res.redirect(routes.home);        
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(routes.home);
    }
};

export const studentsList = async (req, res) => {
    try {
        const students = await Students.find({teacher: req.user.id});
        console.log(students);
        res.render("studentsList", { students });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(routes.home);
    }
};