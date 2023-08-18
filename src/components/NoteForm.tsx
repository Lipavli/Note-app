import { FormEvent, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NoteInfo from "../types/NoteInfo";

type NoteFormProps = {
  addNote: (data: NoteInfo) => void;
};

const NoteForm = ({ addNote }: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOnSumbit = (e: FormEvent) => {
    e.preventDefault();

    const newNote: NoteInfo = {
      id: Date.now(),
      title,
      description,
    };

    addNote(newNote);
    setTitle("");
    setDescription("");
  };

  return (
    <Fragment>
      <form onSubmit={handleOnSumbit}>
        <div className="title">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            placeholder="Add title of your note"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description </label>
          <textarea
            value={description}
            placeholder="Add body of your note"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </form>
      <button onClick={handleOnSumbit}>Save</button>
      <Link to="/">
        <button type="reset">Back</button>
      </Link>
    </Fragment>
  );
};

export default NoteForm;
