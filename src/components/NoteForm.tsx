import { FormEvent, Fragment, useState, useEffect, ChangeEvent } from "react";
import NoteInfo from "../types/NoteInfo";
import colorOptions from "../color/colorOptions";
import { TfiClose } from 'react-icons/tfi'

type NoteFormProps = {
  addNote: (data: NoteInfo) => void;
  handleClose: () => void;
};

const NoteForm = ({ addNote, handleClose }: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const handleOnSumbit = (e: FormEvent) => {
    e.preventDefault();
    const newNote: NoteInfo = {
      id: Date.now(),
      title,
      description,
      color: color,
    };

    addNote(newNote);
    setTitle("");
    setDescription("");
    setColor("");
  };

  return (
    <form onSubmit={handleOnSumbit} className="addForm">
      <TfiClose onClick={handleClose}/>
      <input
        type="text"
        placeholder="Add title of your note"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Add body of your note"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="color-picker">
        <select
        
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleOnSumbit}>Save</button>
    </form>
  );
};

export default NoteForm;
