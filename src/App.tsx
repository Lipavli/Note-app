import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./components/NewNote";
import NoteInfo from "./types/NoteInfo";
import NotesList from "./components/NotesList";
import Aside from "./components/Aside";


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


  const [showCreateNote, setShowCreateNote] = useState<boolean>(false);

  const handleShow = () => {
    setShowCreateNote(!showCreateNote);
  };

  const handleClose = () => {
    setShowCreateNote(false);
  }
  // end of this show/hide modal

  return (
    <div className="App">
      <Aside handleShow={handleShow} />
      <hr />
      <NotesList notes={notes} onDelete={deleteNote} updateNote={updateNote} />
      {showCreateNote ? (
        <NewNote addNote={createNote} handleClose={handleClose}/>
      ) : null}
    </div>
  );
}

export default App;
