import LessonDiary from "../models/LessonDiary";
import Students from "../models/Students";
import routes from "../routes";

export const configLesson = (req, res) => {
    try {
        res.render("lesson/lessonConfig");
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
        if (existDiary.length !==0) {
            const date = existDiary[0].date;
            req.flash("info", "이미 작성한 학습일지가 존재합니다");
            res.render("lesson/lessonEditDiary", { existDiary: existDiary[0], date });
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
    const unit_array = unit.split(/\r\n|\r|\n/);
    const filtered_unit_array = unit_array.filter(function (el) {
        return el !== '';
    })
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
                    unit : [],
                    volume,
                    completeLevel: study_completeLevel
                },
                test : [],
                note,
                teacher: req.user.id
            });
            for (let i=0; i<filtered_unit_array.length; i++) {
                newLessonDiary.study.unit.push(filtered_unit_array[i]);
            }
            if (typeof(test_title)==='string') {
                newLessonDiary.test = {
                    title: test_title,
                    score: test_score,
                    note: test_note
                };
            } else if (typeof(test_title)==='object') {
                for (let test in test_title) {
                    newLessonDiary.test.push({
                        title: test_title[test],
                        score: test_score[test],
                        note: test_note[test]
                    })
                }
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

export const getEditLesson = async (req, res) => {
    const {
        params : {
            lesson_id
        }
    } = req;
    try {
        const diary = await LessonDiary.findById(lesson_id);
        var year = diary.date.getFullYear();
        var month = diary.date.getMonth()+1
        var day = diary.date.getDate();
        if(month < 10){
            month = "0"+month;
        }
        if(day < 10){
            day = "0"+day;
        }
        var date = year+"-"+month+"-"+day;
        const unit = diary.study.unit
        let unit_string ='';
        for (let val of unit) {
            unit_string += val+"\r\n";
        }
        res.render("lesson/lessonEditDiary", { diary, date, unit_string });        
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(routes.home);
    }
}

export const postEditLesson = async (req, res) => {
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
        },
        params : { lesson_id }
    } = req;
    const unit_array = unit.split(/\r\n|\r|\n/);
    const filtered_unit_array = unit_array.filter(function (el) {
        return el !== '';
    })
    try {
        const diary = await LessonDiary.findOneAndUpdate({_id:lesson_id}, {
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
                    unit : [],
                    volume,
                    completeLevel: study_completeLevel
                },
                test: [],
                note
        });
        for (let i=0; i<filtered_unit_array.length; i++) {
            diary.study.unit.push(filtered_unit_array[i]);
        }
        if (typeof(test_title)==='string') {
            diary.test = {
                title: test_title,
                score: test_score,
                note: test_note
            };
        } else if (typeof(test_title)==='object') {
            for (let test in test_title) {
                diary.test.push({
                    title: test_title[test],
                    score: test_score[test],
                    note: test_note[test]
                })
            }
        }
        diary.save();
    } catch (error) {
        req.flash("error", error.message);
        res.redirect(`/lesson${routes.lessonConfig}`);
    }
    res.redirect(`/lesson${routes.lessonConfig}`);
}

export const getSearchLesson = (req, res) => {
    res.render("lesson/lessonSearch");
}