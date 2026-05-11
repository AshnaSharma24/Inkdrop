import express from "express";
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from "../controllers/notesController.js";
import validateNote from "../middleware/validateNote.js";  

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", validateNote, createNote);        // validateNote runs first
router.put("/:id", validateNote, updateNote);      // validateNote runs first
router.delete("/:id", deleteNote);

export default router;