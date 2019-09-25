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
            tel: tel.trim().replace(/\-/g,''),
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
        res.render("studentsList", { students });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(routes.home);
    }
};

export const getEditStudent = async (req, res) => {
    const { 
        params : { student_id }
     } = req;
     console.log(student_id);
    try {
        const student = await Students.findById({_id: student_id});
        res.render("editStudent", { student });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(routes.home);
    }
};

export const postEditStudent = async (req, res) => {
    const {
        params: { student_id },
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
        await Students.findOneAndUpdate({_id: student_id}, {
            name: studentName,
            grade: studentGrade,
            school: studentSchool,
            tel: tel.trim().replace(/\-/g,''),
            registrationDate: registrationDate,
            note: note,
            lessonDay: lessonDay,
            status: studentStatus,
            teacher: req.user.id
        });
        res.redirect(`/students${routes.studentsList}`);
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(`/students${routes.studentsList}`);
    }
};

export const deleteStudent = async (req, res) => {
    const {
        params: { student_id }
      } = req;
    console.log(student_id);
    try {
        const student = await Students.findById(student_id);
        if (String(student.teacher) !== req.user.id){
            throw Error();
        } else {
            await Students.findOneAndRemove({_id: student_id});
        }
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(`/students${routes.studentsList}`);
    }
    res.redirect(`/students${routes.studentsList}`);
};