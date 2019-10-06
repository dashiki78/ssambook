import StudyUnit from "../models/StudyUnit";
import routes from "../routes";

export const getInsertUnit = (req, res) => {
    res.render("admin/insertUnit");
}

export const postInsertUnit = async (req, res) => {
    const {
        body: {
            subject,
            grade,
            unit
        }
    } = req;
    const unit_array = unit.split(/\r\n|\r|\n/);
    try {
        const newUnit = await StudyUnit.create({
            subject,
            grade
        })
        for (let i in unit_array) {
            let unit_unit = {
                title: unit_array[i],
                index: i
            };
            newUnit.unit.push(unit_unit);
        }
        newUnit.save();
    } catch (error) {
        req.flash("error", error.message);
    }
    res.redirect(routes.home);
}