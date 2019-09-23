import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    email: String,
    nickName: String,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Students"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;