import React, { Fragment, SetStateAction } from "react";
import NoteForm from "./NoteForm";
import NoteInfo from "../types/NoteInfo";

type NewNoteProps = {
  addNote: (data: NoteInfo) => void;
  handleClose: () => void;
};
// this is a page where we create notes
const NewNote = ({ addNote, handleClose }: NewNoteProps) => {
  return <NoteForm addNote={addNote} handleClose={handleClose} />;
};

export default NewNote;
