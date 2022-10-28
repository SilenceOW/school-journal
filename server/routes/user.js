import { Router } from "express";
import { signup, login, getProfile } from '../controllers/user.js';
const router = new Router();

// Register
// http://domain.com/api/user/register
router.post('/signup', signup)

// Login
// http://domain.com/api/user/login
router.post('/login', login)

// Profile
// http://domain.com/api/user/profile
router.get('/profile', getProfile);

export default router;