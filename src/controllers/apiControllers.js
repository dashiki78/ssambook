import Students from "../models/Students";
import StudyUnit from "../models/StudyUnit";

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
        res.status(505);
    }
}