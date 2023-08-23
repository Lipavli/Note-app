import React, { useState } from "react";
import NoteInfo from "../types/NoteInfo";
import { DropResult } from "react-beautiful-dnd";

const useNotes = () => {
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
    if (!result.destination) return;
  
  const items = Array.from(notes);
  const [reorderedNotes] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedNotes);

  setNotes(items);
  };


  //   const onDragEnd = (result: DropResult) => {
  //     const { destination, source } = result;
  //     if (!destination) return;
  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }

  //   let move;

  //   if (source.droppableId === "notesList") {
  //     move = notes[source.index];
  //     notes.splice(source.index, 1);
  //   } else return;

  //   if (destination.droppableId === "notesList") {
  //     notes.splice(destination.index, 0, move);
  //   }

  //   setNotes(notes);
  // };

  return {
    notes,
    showCreateNote,
    setNotes,
    createNote,
    deleteNote,
    updateNote,
    handleShow,
    handleClose,
    onDragEnd,
  };
};

export default useNotes;
