import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';

const app = express();
dotenv.config({path: "./.env"});

// Constants
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute)

async function start() {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start();