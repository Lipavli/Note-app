import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import NoteInfo from "../types/NoteInfo";

interface CardListProps {
    notes: NoteInfo[];
}

const CardList = ({notes}: CardListProps) => {

  return (
    <Fragment>
        <h1>My notes</h1>
      <Link to="/new">
        <button>Create new notes</button>
      </Link>
      {notes.map((note) => (
          <div className="note" key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </div>
    
      ))}
    </Fragment>
  );
};

export default CardList;
