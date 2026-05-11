import Note from "../models/Note.js";
import asyncHandler from "../utils/asyncHandler.js";

// GET /api/notes
export const getAllNotes = asyncHandler(async (_, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: notes });
});

// GET /api/notes/:id
export const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ success: false, message: "Note not found" });
  res.status(200).json({ success: true, data: note });
});

// POST /api/notes
export const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ success: false, message: "Title and content are required" });
  }
  const note = await Note.create({ title, content });
  res.status(201).json({ success: true, data: note });
});

// PUT /api/notes/:id
export const updateNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );
  if (!updatedNote) return res.status(404).json({ success: false, message: "Note not found" });
  res.status(200).json({ success: true, data: updatedNote });
});

// DELETE /api/notes/:id
export const deleteNote = asyncHandler(async (req, res) => {
  const deleted = await Note.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: "Note not found" });
  res.status(200).json({ success: true, message: "Note deleted successfully" });
});