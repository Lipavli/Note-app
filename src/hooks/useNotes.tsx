import React, { useState } from "react";
import NoteInfo from "../types/NoteInfo";

const useNotes = () => {
  const [notes, setNotes] = useState<NoteInfo[]>([]);
  const createNote = (data: NoteInfo) => {
    setNotes((prev) => [...prev, { id: notes.length + 1, title: data.title }]);
  };

  return {
    notes,
    setNotes,
    createNote,
  };
};

export default useNotes;
