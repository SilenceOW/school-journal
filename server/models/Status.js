import mongoose from "mongoose";

const StatusSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export default mongoose.model('Status', StatusSchema);