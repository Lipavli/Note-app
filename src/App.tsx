import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./components/NewNote";
import Main from "./components/Main";
import NoteInfo from "./types/NoteInfo";
import CardList from "./components/CardList";
import NoteDetails from "./components/NoteDetails";
import { useParams } from "react-router-dom";

function App() {
  const [notes, setNotes] = useState<NoteInfo[]>([]);
  const [currentNote, setCurrentNote] = useState<NoteInfo | null>(null);

  const createNote = (data: NoteInfo) => {
    setNotes([...notes, data]);
  };

  return (
    <Routes>
      <Route path="/" element={<CardList notes={notes} />}></Route>
      <Route path="/new" element={<NewNote addNote={createNote} />}></Route>
      <Route path="/:id" element={<NoteDetails note={currentNote} />}></Route>
    </Routes>
  );
}

export default App;
