import express from "express";
import Student from "../module/Student.js";
const router = express.Router();

//CREATE 
router.post("/", async (req, res) => {
    const newStudent = new Student(req.body);
    try {
        const savedStudent = await newStudent.save()
        res.status(200).json(savedStudent)
    } catch (err) {
        res.status(500).json(err);
    }
});
//UPDATE
router.put("/:id", async (req, res) => {

    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id,
            { $set: req.body }, { new: true })
        res.status(200).json(updatedStudent)
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET

router.get("/:id", async (req, res) => {

    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student)
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {

    try {
        const students = await Student.find();
        res.status(200).json(students)
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id,
            { $set: req.body })
        res.status(404).json("Student has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});




export default router;