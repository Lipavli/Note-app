import React, { useState } from "react";
import "./App.css";
import NewNote from "./components/NewNote";
import NoteInfo from "./types/NoteInfo";
import NotesList from "./components/NotesList";
import Aside from "./components/Aside";
import { DragDropContext } from "react-beautiful-dnd";
import useNotes from "./hook/useNotes";

function App() {
  const {
    notes,
    deleteNote,
    updateNote,
    createNote,
    onDragEnd,
    handleClose,
    handleShow,
    showCreateNote,
  } = useNotes();

  return (
    <div className="App">
      <Aside handleShow={handleShow} />
      <hr />
      <DragDropContext onDragEnd={onDragEnd}>
        <NotesList
          notes={notes}
          onDelete={deleteNote}
          updateNote={updateNote}
        />
      </DragDropContext>
      {showCreateNote ? (
        <NewNote addNote={createNote} handleClose={handleClose} />
      ) : null}
      {/* <NotFound/> */}
    </div>
  );
}

export default App;
