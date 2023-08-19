import React, { Fragment, useState } from "react";
import NoteInfo from "../types/NoteInfo";
import { Link } from "react-router-dom";
import EditNoteForm from "./EditNoteForm";
import { PiTrashThin, PiNotePencilThin } from "react-icons/pi";

interface CardItemProps {
  note: NoteInfo;
  onDelete: (id: number) => void;
  id: number;
  updateNote: (note: NoteInfo) => void;
}
const CardItem = ({ note, onDelete, id, updateNote }: CardItemProps) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Fragment>
      <div className="singleNote" style={{ backgroundColor: note.color }}>
        <h3>{note.title}</h3>
        <p>{note.description}</p>
        <PiTrashThin onClick={handleDelete} />
        <PiNotePencilThin onClick={handleEdit} />
        {edit ? (
          <EditNoteForm
            updateNote={updateNote}
            handleEdit={handleEdit}
            note={note}
          />
        ) : null}
   
      </div>
    </Fragment>
  );
};
export default CardItem;
