import React, { ChangeEvent, FormEvent, Fragment, useRef } from "react";
import {  Link } from "react-router-dom";
import NoteInfo from "../types/NoteInfo";


type NoteFormProps = {
    onSubmit: (data:NoteInfo) => void;
}

const NoteForm = ({onSubmit}: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleOnSumbit = (e: FormEvent) =>{
    e.preventDefault();
    onSubmit({
        title: titleRef.current!.value,
        description: descriptionRef.current!.value,
    })
  }

  return (
    <Fragment>
      <form onSubmit={handleOnSumbit}>
        <div className="title">
          <label htmlFor="title">Title </label>
          <input type="text" name="title" ref={titleRef} required />
        </div>
        <div className="description">
          <label htmlFor="description">Description </label>
          <textarea name="description" ref={descriptionRef} required />
        </div>
      </form>
      <button type="submit" >Save</button>

      <Link to="..">
        <button type="reset">Back</button>
      </Link>
    </Fragment>
  );
};

export default NoteForm;
