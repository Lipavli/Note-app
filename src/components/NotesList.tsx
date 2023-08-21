import React, { FormEvent, ChangeEvent, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import NoteInfo from "../types/NoteInfo";
import Aside from "./Aside";
import Search from "./Search";
import NotFound from "./NotFound";
import { Droppable } from "react-beautiful-dnd";

interface NotesListProps {
  notes: NoteInfo[];
  onDelete: (id: number) => void;
  updateNote: (note: NoteInfo) => void;
}

const NotesList = ({ notes, onDelete, updateNote }: NotesListProps) => {
  const [search, setSearch] = useState(""); // this state is used to set the search

  // function which returns filterd notes that matches the search input or current notes array
  const filtered = search
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(search.toLowerCase()) ||
          note.description.toLowerCase().includes(search.toLowerCase())
      )
    : notes;

  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <h2>Notes</h2>
      <Droppable droppableId="notesList">
        {(provided) => (
          <div
            className="notesList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filtered.length > 0 ? (
              filtered.map((note, index) => (
                <CardItem
                  key={note.id}
                  note={note}
                  onDelete={onDelete}
                  id={note.id}
                  updateNote={updateNote}
                  index={index}
                />
              ))
            ) : (
              <NotFound />
            )}
          </div>
        )}
      </Droppable>
    </main>
  );
};

export default NotesList;
