import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject'
        },
        description: {
            type: String
        },
        home_work: {
            type: String
        }
    },
    {timestamps: true}
)

export default mongoose.model('Lesson', LessonSchema);