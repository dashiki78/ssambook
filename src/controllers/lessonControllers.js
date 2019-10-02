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
    try {
        const existDiary = await LessonDiary.find({student: student_id, date});
        console.log(existDiary);
        if (existDiary.length !==0) {
            req.flash("info", "이미 작성한 학습일지가 존재합니다");
            res.redirect(routes.home);
            return ;
        }
    } catch (error) {
        req.flash("error", error.message);
    }
    res.render("lesson/lessonNewDiary", { student_id, date, name });
};

export const postNewLesson = async (req, res) => {
    const {
        body : {
            student_id,
            date,
            name,
            studyType,
            attend,
            fulfillment,
            faithfulness,
            homework_completeLevel,
            unit,
            volume,
            study_completeLevel,
            test_title,
            test_score,
            test_note,
            note
        }
    } = req;
    console.log(student_id,
        date,
        name,
        studyType,
        attend,
        fulfillment,
        faithfulness,
        homework_completeLevel,
        unit,
        volume,
        study_completeLevel,
        test_title,
        test_score,
        test_note,
        note);
        let test_list = [];
        for ( let test in test_title ) {
            const test_unit = { 
                title : test_title[test],
                score : test_score[test],
                note : test_note[test]
            }
            test_list.push(test_unit);
        }
    try {
        const existDiary = await LessonDiary.find({student: student_id, date: date});
        if ( existDiary.length === 0 ) {
            const newLessonDiary = await LessonDiary.create({
                student: student_id,
                date,
                name,
                studyType,
                attend,
                homework: {
                    fulfillment,
                    faithfulness,
                    completeLevel: homework_completeLevel
                },
                study: {
                    unit,
                    volume,
                    completeLevel: study_completeLevel
                },
                note,
                teacher: req.user.id
            });
            for (let test in test_list) {
                newLessonDiary.test.push(test_list[test]);
            }
            newLessonDiary.save();
            const student = await Students.findById(student_id);
            student.lessonDiary.push(newLessonDiary.id);
            student.save();                 
        } else {
            req.flash("info", "이미 작성한 학습일지가 존재합니다");
        }
                } catch (error) {
            req.flash("error", error.message);
        }
    res.redirect(routes.home);
}