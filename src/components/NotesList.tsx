import React, { FormEvent, Fragment } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import NoteInfo from "../types/NoteInfo";

interface NotesListProps {
  notes: NoteInfo[];
  onDelete: (id: number) => void;
}

const NotesList = ({ notes, onDelete }: NotesListProps) => {

  return (
    <Fragment>
      <h1>My notes</h1>
      <Link to="/new">
        <button>Create new notes</button>
      </Link>
      <div className="note-list">
        {notes.map((note) => (
          <CardItem key={note.id} note={note} onDelete={onDelete} id={note.id}/>
        ))}
      </div>
    </Fragment>
  );
};

export default NotesList;
