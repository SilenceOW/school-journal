import mongoose from "mongoose";
import Role from "../models/Role.js";
import dotenv from 'dotenv';
import Status from "../models/Status.js";
dotenv.config({path: "./.env"});

try {
    await mongoose.connect(process.env.ATLAS_URI);
    await Role.insertMany(
        [
            {
                name: 'Учитель'
            },
            {
                name: 'Директор',
            },
            {
                name: 'Зам. Директора'
            },
            {
                name: 'Ученик'
            },
            {
                name: 'Администратор'
            }
        ],
        (err, doc) => {
            if (err) return console.log(err);
            console.log("Сохранены объекты role");
        })
    await Status.insertMany(
        [
            {
                name: 'Admin'
            },
            {
                name: 'User'
            }
        ],
        (err, doc) => {
            if (err) return console.log(err);
            console.log("Сохранены объекты Status")
        }
    )
    mongoose.disconnect();
} catch (error) {
    console.log(error)
}