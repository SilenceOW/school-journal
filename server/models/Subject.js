import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        },
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {timestamps: true}
)

export default mongoose.model('Subject', SubjectSchema);