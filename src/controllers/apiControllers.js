import Students from "../models/Students";

export const getStudent = async (req, res) => {
    const studentsList = await Students.find({ teacher: req.user.id});
    res.json(studentsList);
    res.status(200);
}