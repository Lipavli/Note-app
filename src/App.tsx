import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./components/NewNote";
import NoteInfo from "./types/NoteInfo";
import NotesList from "./components/NotesList";
import EditNoteForm from "./components/EditNoteForm";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState<NoteInfo[]>([]); // this state id used to store notes

  const createNote = (data: NoteInfo) => {
    setNotes([...notes, data]);
  };

  const deleteNote = (id: number) => {
    const newNotes = notes.filter((newNote) => newNote.id !== id);
    setNotes(newNotes);
  };


  const updateNote = (editedNote: NoteInfo) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === editedNote.id ? editedNote : note))
    );
  };

  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={<NotesList notes={notes} onDelete={deleteNote} editNote={editNote} />}
    //   ></Route>
    //   <Route path="/new" element={<NewNote addNote={createNote} />}/>
    // </Routes>
    <div className="App">
      <NotesList notes={notes} onDelete={deleteNote} updateNote={updateNote} />
      
      <NewNote addNote={createNote} />
    </div>
  );
}

export default App;
