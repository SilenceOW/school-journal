import { Router } from "express";
import { signup, login, getProfile } from '../controllers/user.js';
const router = new Router();

// Register
// http://domain.com/api/auth/register
router.post('/signup', signup)

// Login
// http://domain.com/api/auth/login
router.post('/login', login)

// Profile
// http://domain.com/api/auth/profile
router.post('/profile', getProfile);

export default router;