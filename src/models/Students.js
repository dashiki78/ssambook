import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "이름은 필수입력사항입니다"
    },
    grade: {
        type: String,
        required: "학년은 필수입력사항입니다"
    },
    school: String,
    tel: String,
    registrationDate: Date,
    note: String,
    lessonDay: {
        type: String,
        enum: ['월', '화', '수', '목', '금', '토', '일']
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    lessonDiary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LessonDiary"
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
});

const model = mongoose.model("Students", StudentSchema);
export default model;