import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        school: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'School',
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
            default: null
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

export default mongoose.model('Post', PostSchema);