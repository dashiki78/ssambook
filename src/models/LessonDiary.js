import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "이름은 필수입력사항입니다"
    },
    date: {
        type: Date,
        required: "날짜는 필수입력사항입니다"
    },
    studyType: {
        type: String,
        enum: ['정규', '보충']
    },
    attend: {
        type: String,
        enum: ['출석', '지각', '결석']
    },
    homeWork: {
        fulfillment: {
            type: String,
            enum: ['우수', '양호', '보통', '불량']
        },
        faithfulness: {
            type: Number,
            min: 0,
            max: 100
        },
        completeLevel: {
            type: Number,
            min: 0,
            max: 100
        }
    },
    study: {
        unit: [
            {
                type: String
            }
        ],
        volume: {
            type: Number,
            min: 0,
            max: 100
        },
        completeLevel: {
            type: Number,
            min: 0,
            max: 100
        }
    },
    test: [
        {
            title: String,
            score: {
                type: Number,
                min: 0,
                max: 100
            },
            note: String
        }
    ],
    note: String,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("LessonDiary", LessonSchema);
export default model;