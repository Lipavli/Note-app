import React, { useState } from "react";
import "./App.css";
import NewNote from "./components/NewNote";
import NoteInfo from "./types/NoteInfo";
import NotesList from "./components/NotesList";
import Aside from "./components/Aside";
import {DragDropContext, DropResult} from 'react-beautiful-dnd'

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
  };
  // end of this show/hide modal


  const onDragEnd = (result: DropResult) => {
    // const { destination, source } = result;

    // if (!destination) {
    //   return;
    // }
    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }

    // let move;

    
    // if (source.droppableId === "notesList") {
    //   move = notes[source.index];
    //   notes.splice(source.index, 1); 
    // }
    
    // if (destination.droppableId === "TodosList") {
    //   notes.splice(destination.index, 0, move);
    // }

    // setNotes(notes)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <Aside handleShow={handleShow} />
      <hr />
      <NotesList notes={notes} onDelete={deleteNote} updateNote={updateNote} />
      {showCreateNote ? (
        <NewNote addNote={createNote} handleClose={handleClose} />
      ) : null}
      {/* <NotFound/> */}
    </div>
    </DragDropContext>
  );
}

export default App;
