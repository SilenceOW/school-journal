import User from "../models/User.js";
import jwt from "jsonwebtoken";

// generate JWT

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '7d'});
}

//  Register user

export const signup = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const user = await User.signup(username, email, password);

        // create JWT
        const token = createToken(user._id);

        res.status(200).json({username, email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Login user

export const login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.login(username, password);

        // create JWT
        const token = createToken(user._id);

        res.status(200).json({username, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Get profile

export const getProfile = async (req, res) => {
    res.json({mssg: "getProfile page"})
}