import School from "../models/School.js";

export const getAllSchools = async (req, res) => {
    try {
        const schools = await School.getArrayOfSchools();
        res.status(200).json({ schools });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const createNewSchool = async (req, res) => {
    let { name, country, region, address, description } = req.body;
    if (!description) description = "";
    try {
        const school = await School.createNewSchool(name, country, region, address, description);
        res.status(200).json({ school });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteSchool = async (req, res) => {
    const { _id } = req.body;
    try {
        const school = await School.deleteSchool(_id);
        res.status(200).json({ message: "Школа успешна удалена",  school});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}