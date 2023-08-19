import React, { ChangeEvent, Fragment, useState } from "react";
import NoteForm from "./NoteForm";
import NoteInfo from "../types/NoteInfo";

type EditNoteFormProps = {
  updateNote: (note: NoteInfo) => void;
  handleEdit: () => void;
  note: NoteInfo;
};
// this is a page where we edit notes
const EditNoteForm = ({ updateNote, handleEdit, note }: EditNoteFormProps) => {
  const [editNote, setEditNote] = useState<NoteInfo>(note);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditNote({ ...editNote, [name]: value });
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditNote({ ...editNote, [name]: value });
  }

  const handleSumbit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = editNote;
    if (title || description) {
      updateNote(editNote);
      handleEdit();
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSumbit}>
        <input
          name="title"
          type="text"
          onChange={handleChangeTitle}
          value={editNote.title}
        />
        <textarea name='description' value={editNote.description} onChange={handleChangeDescription}/>
        <button type="submit">save</button>
      </form>
    </Fragment>
  );
};

export default EditNoteForm;
