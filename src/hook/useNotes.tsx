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
