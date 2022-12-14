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
    const isExist = (await this.findOne({ name, country, region }));
    if (isExist) throw Error("Эта школа уже зарегистрирована в портале");
    return await this.create({name, country, region, address, description});
}

SchoolSchema.statics.deleteSchool = async function(_id) {
    return await this.findOneAndDelete({ _id });
}

SchoolSchema.statics.getArrayOfSchools = async function() {
    return await this.find();
}

export default mongoose.model('School', SchoolSchema);