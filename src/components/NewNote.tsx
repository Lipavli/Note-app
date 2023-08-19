import React, { Fragment } from "react";
import NoteForm from "./NoteForm";
import NoteInfo from "../types/NoteInfo";

type NewNoteProps = {
  addNote: (data: NoteInfo) => void;

};
// this is a page where we create notes
const NewNote = ({ addNote }: NewNoteProps) => {
  return <NoteForm addNote={addNote} />;
};

export default NewNote;
