// This is the only place in your frontend that talks to the backend
// All API calls go here. Components never call api.get/post/delete directly.

import api from "./axios";

export async function fetchAllNotes() {
  const res = await api.get("/notes");
  return res.data.data; // unwrap { success, data }
}

export async function fetchNoteById(id) {
  const res = await api.get(`/notes/${id}`);
  return res.data.data;
}

export async function createNote(title, content) {
  const res = await api.post("/notes", { title, content });
  return res.data.data;
}

export async function updateNote(id, title, content) {
  const res = await api.put(`/notes/${id}`, { title, content });
  return res.data.data;
}

export async function deleteNote(id) {
  const res = await api.delete(`/notes/${id}`);
  return res.data;
}