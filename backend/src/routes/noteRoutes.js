import express from "express";
import {getAllNotes,getNoteById, createNote,updateNote, deleteNote } from "../controllers/notesController.js"
const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createNote)
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);


// put controllers
/*
router.get("/",(req, res) => {
    res.status(200).send("you've just fecth the notes.");        
});

router.post("/", (req, res) => {
    res.status(201).json({message:"note created successfully"});        
});

router.put("/:id", (req, res) => {
    res.status(201).json({message:"note updated successfully"});       
});

router.delete("/:id", (req, res) => {
    res.status(200).json({message:"note deleted successfully"});       
});
*/

/*
// this is a route we converted this to the upper code it was in server.js
app.get("/api/notes", (req, res) => {
    res.status(200).send("you've got 130 notes.");        
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"note created successfully"});      
});

app.put("/api/notes/:id", (req, res) => {
    res.status(201).json({message:"note updated successfully"});        
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"note deleted successfully"});       
});
*/

export default router;