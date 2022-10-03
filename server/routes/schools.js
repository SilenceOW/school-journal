import { Router } from "express";
import { getAllSchools } from "../controllers/schools.js";

const router = new Router();

router.get('/all', getAllSchools);

export default router;