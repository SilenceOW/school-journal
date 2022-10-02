import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
    {
        school: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'School'
        },
        grade: {
            type: String,
            required: true
        },
        letter: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export default mongoose.model('Class', ClassSchema);