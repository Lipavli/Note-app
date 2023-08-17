import React, { Fragment } from "react";
import NoteForm from "./NoteForm";
import NoteInfo from "../types/NoteInfo";

type NewNoteProps = {
  addNote: (data: NoteInfo) => void;
};
// this is a page where we create notes 
const NewNote = ({ addNote }: NewNoteProps) => {
  return (
    <Fragment>
      <h1>New note</h1>
      <NoteForm addNote={addNote} />
    </Fragment>
  );
};

export default NewNote;
