import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRoute from "./routers/student.js"


const app = express()
dotenv.config();

app.use(express.json())
app.use("/api/student", studentRoute);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB");
    } catch (error) {
        throw error;
    }
};


app.get("/",(req,res)=>{
    res.send("backend")
})

app.listen(8000, () => {
    connect()
    console.log("Connected to backend");
}) 