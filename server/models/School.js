import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
    {timestamps: true}
)

SchoolSchema.statics.createNewSchool = async function(name, country, region, address, description = "") {
    if (!name || !country || !region || !address) throw Error("Заполните все поля!");
    return await this.create({name, country, region, address, description});
}

SchoolSchema.statics.deleteSchool = async function(_id) {
    await this.deleteOne({ _id });
}

SchoolSchema.statics.getArrayOfSchools = async function() {
    return await this.find();
}

export default mongoose.model('School', SchoolSchema);