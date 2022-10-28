import { Router } from "express";
import {createNewSchool, deleteSchool, getAllSchools} from "../controllers/schools.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = new Router();

router.use(requireAuth);

router.get('/all', getAllSchools);

router.post('/create', createNewSchool);

router.post('/delete', deleteSchool);

export default router;