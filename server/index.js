import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import * as path from "path";
import cors from 'cors';
import userRoute from './routes/user.js';
import schoolsRoute from "./routes/schools.js";

const app = express();
dotenv.config({path: "./.env"});

// Constants
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRoute);
app.use('/api/schools', schoolsRoute);

// // Let React handle all the non-API routes
// app.use(express.static(path.join(__dirname, '/client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })

async function start() {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start();