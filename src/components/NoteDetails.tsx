import React, { Fragment } from "react";
import NoteInfo from "../types/NoteInfo";

type NoteDetailsProps = {
  note: NoteInfo | null;
};

const NoteDetails = ({ note }: NoteDetailsProps) => {
  if (!note) {
    return <div>Note not found</div>;
  }
  return (
    <div>
      <h1>{note.title}</h1>
      <h3>{note.description}</h3>
    </div>
  );
};
export default NoteDetails;
