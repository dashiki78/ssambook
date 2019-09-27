import Students from "../models/Students";

export const getStudent = async (req, res) => {
    const studentsList = await Students.find({ teacher: req.user.id, status: "재원생"});
    res.json(studentsList);
    res.status(200);
}