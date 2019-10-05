import Students from "../models/Students";
import StudyUnit from "../models/StudyUnit";
import LessonDiary from "../models/LessonDiary";

export const getStudent = async (req, res) => {
    const studentsList = await Students.find({ teacher: req.user.id, status: "재원생"}).populate("lessonDiary");
    res.json(studentsList);
    res.status(200);
}

export const getStudyUnit = async (req, res) => {
    const {
        query: {
            grade
        }
    } = req;
    try {
        const studyUnit = await StudyUnit.findOne({ subject: '수학', grade });
        const studyUnitList = studyUnit.unit;
        res.json(studyUnitList);
        res.status(200);        
    } catch (error) {
        res.status(404);
    }
}

export const getStudentName = async (req, res) => {
    try {
        const student = await Students.find({ teacher: req.user.id, status: "재원생"}).select('name');
        res.json(student);
        res.status(200);
    } catch (error) {
        res.status(404);
    }
}

export const getLessonDiaryList = async (req, res) => {
    const {
        params: {
            start_date,
            end_date,
            student_id
        }
    } = req;
    try {
        const diaryList = await LessonDiary.find({ student: student_id, date: { $gte: start_date, $lte: end_date} });
        res.json(diaryList);
        res.status(200);
    } catch (error) {
        res.status(404);
    }
}