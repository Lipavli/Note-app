import React from "react";
import NoteForm from "./NoteForm";
import NoteInfo from "../types/NoteInfo";

type NewNoteProps = {
    onSubmit: (data:NoteInfo) => void
}

const NewNote = ({onSubmit}: NewNoteProps) => {
  return (
    <>
      <h1>New note</h1>
      <NoteForm onSubmit={onSubmit}/>
    </>
  );
};

export default NewNote;
