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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </form>
      <Link to="..">
        <button onClick={handleOnSumbit}>Save</button>
      </Link>
      <Link to="..">
        <button type="reset">Back</button>
      </Link>
    </Fragment>
  );
};

export default NoteForm;
