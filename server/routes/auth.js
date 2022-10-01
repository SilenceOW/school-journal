import { Router } from "express";
import { register, login, getProfile } from '../controllers/auth.js';
const router = new Router();

// Register
// http://domain.com/api/auth/register
router.post('/register', register)

// Login
// http://domain.com/api/auth/login
router.post('/login', login)

// Profile
// http://domain.com/api/auth/profile
router.post('/profile', getProfile);

export default router;