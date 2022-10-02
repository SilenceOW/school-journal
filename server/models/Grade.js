import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        lesson: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Lesson'
        },
        reason: {
            type: String
        }
    },
    {timestamps: true}
)

export default mongoose.model('Grade', GradeSchema);