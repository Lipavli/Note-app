import React, { Fragment, useState } from "react";
import NoteInfo from "../types/NoteInfo";
import { Link } from "react-router-dom";
import EditNoteForm from "./EditNoteForm";
import { PiTrashThin, PiNotePencilThin } from "react-icons/pi";
import { Draggable } from "react-beautiful-dnd";
import { BsArrowsAngleExpand, BsArrowsExpand } from "react-icons/bs";
import DescriptionModal from "./DescriptionModal";

interface CardItemProps {
  note: NoteInfo;
  onDelete: (id: number) => void;
  id: number;
  updateNote: (note: NoteInfo) => void;
  index: number;
}
const CardItem = ({ note, onDelete, id, updateNote, index }: CardItemProps) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  
  const [showModal, setShowModal] = useState(false);
  const mouseOnClick = () => {
    setShowModal((prevShow) => !prevShow);
  };

  return (
    <Draggable draggableId={note.id.toString()} index={index}>
      {(provided) => (
        <div
          className="singleNote"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{ backgroundColor: note.color }}
        >
          <h3>{note.title}</h3>
          <BsArrowsAngleExpand onClick={mouseOnClick} className="expandSvg"/>
          {showModal ? (
            <DescriptionModal
              description={note.description}
              showModal={showModal}
            />
          ) : (
            <p>{note.description}</p>
          )}
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
      )}
    </Draggable>
  );
};
export default CardItem;
