import React, { Fragment } from "react";
import NoteInfo from "../types/NoteInfo";
import { Link } from "react-router-dom";

interface CardItemProps {
  note: NoteInfo;
  onDelete: (id: number) => void;
  id: number;
}
const CardItem = ({ note, onDelete, id }: CardItemProps) => {
  const handleDelete = () => {
    onDelete(id);
  };
 
  return (
    <Fragment>
      <div className="note">
        <h2>{note.title}</h2>
        <p>{note.description}</p>
        <button onClick={handleDelete}>delete</button>
      </div>
    </Fragment>
  );
};
export default CardItem;
