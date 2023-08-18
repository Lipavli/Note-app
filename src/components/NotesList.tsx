import React, { FormEvent, ChangeEvent, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import NoteInfo from "../types/NoteInfo";

interface NotesListProps {
  notes: NoteInfo[];
  onDelete: (id: number) => void;

}

const NotesList = ({ notes, onDelete}: NotesListProps) => {
  
  const [search, setSearch] = useState(""); // this state is used to set the search

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toUpperCase());
  };

  const filtered = search ? notes.filter((note)=> note.title.toUpperCase().includes(search.toUpperCase())) : notes;

  return (
    <Fragment>
      <h1>My notes</h1>
      <Link to="/new">
        <button>Create new notes</button>
      </Link>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="find notes"
      />
      <div className="note-list">
        {filtered.map((note) => (
          <CardItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            id={note.id}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default NotesList;
