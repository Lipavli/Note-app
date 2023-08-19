import React, { Fragment, useState } from "react";
import NoteInfo from "../types/NoteInfo";
import { Link } from "react-router-dom";
import EditNoteForm from "./EditNoteForm";

interface CardItemProps {
  note: NoteInfo;
  onDelete: (id: number) => void;
  id: number;
  updateNote: (note: NoteInfo) => void;
}
const CardItem = ({ note, onDelete, id, updateNote }: CardItemProps) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setEdit(!edit)
  };

  return (
    <Fragment>
      <div className="note">
        <h2>{note.title}</h2>
        <p>{note.description}</p>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleEdit}>edit</button>
        {edit ? (
          <EditNoteForm updateNote={updateNote} handleEdit={handleEdit} note={note}/>
        ) : null}
      </div>
    </Fragment>
  );
};
export default CardItem;
