import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./components/NewNote";
import NoteInfo from "./types/NoteInfo";
import NotesList from "./components/NotesList";

function App() {

  const [notes, setNotes] = useState<NoteInfo[]>([]);
  const createNote = (data: NoteInfo) => {
    setNotes([...notes, data]);
  };

  const deleteNote = (id: number) => {
    const newNotes = notes.filter((newNote) => newNote.id !== id);
    setNotes(newNotes);
  };


  return (
    <Routes>
      <Route path="/" element={<NotesList notes={notes} onDelete={deleteNote} />}></Route>
      <Route path="/new" element={<NewNote addNote={createNote} />}></Route>
    </Routes>
  );
}

export default App;
