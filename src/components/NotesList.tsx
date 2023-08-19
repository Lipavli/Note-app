import React, { FormEvent, ChangeEvent, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import NoteInfo from "../types/NoteInfo";

interface NotesListProps {
  notes: NoteInfo[];
  onDelete: (id: number) => void;
  updateNote: (note: NoteInfo) => void;


}

const NotesList = ({ notes, onDelete, updateNote}: NotesListProps) => {
  const [search, setSearch] = useState(""); // this state is used to set the search

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  // function which returns filterd notes that matches the search input or current notes array
  const filtered = search
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  return (
    <Fragment>
      <h1>My notes</h1>
      <Link to="/new">
        <button>Create new notes</button>
      </Link>

      {/* search for notes */}
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="find notes"
      />
      {/* end  search for notes*/}
      <div className="note-list">
        {filtered.map((note) => (
          <CardItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            id={note.id}
            updateNote={updateNote}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default NotesList;
