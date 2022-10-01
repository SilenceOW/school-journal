import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        school: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'School'
        },
        Class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        }
    },
    {timestamps: true}
)

export default mongoose.model('User', UserSchema);