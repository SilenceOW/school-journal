import School from "../models/School";

export const getAllSchools = async (req, res) => {
    try {
        const schools = School.getListOfSchools();
        res.status(200).json({ schools });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const createNewSchool = async (req, res) => {
    try {
        const school = School.createNewSchool();
        res.status(200).json({ school });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteSchool = async (req, res) => {
    const { _id } = req.body;
    try {
        School.deleteSchool(_id);
        res.status(200).json({ message: "Школа успешна удалена" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}