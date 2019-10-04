import mongoose from "mongoose";

const StudyUnitSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: "과목은 필수항목입니다",
        enum: ['수학', '영어']
    },
    grade: {
        type: String,
        required: "학년은 필수항목입니다",
        enum: ['초1-1', '초1-2', '초2-1', '초2-2', '초3-1', '초3-2', '초4-1', '초4-2', '초5-1', '초5-2', '초6-1', '초6-2', '중1-1', '중1-2', '중2-1', '중2-2', '중3-1', '중3-2']
    },
    unit: [{
        title: {
            type: String
        },
        index: {
            type: Number
        }
    }]
});

const model = mongoose.model("StudyUnit", StudyUnitSchema);
export default model;