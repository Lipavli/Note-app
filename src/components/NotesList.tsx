import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotesList = () => {
  return (
    <Fragment>
      <h1>My notes</h1>
      <Link to="/new">
        <button>Create new notes</button>
      </Link>
      <div className="list-group">
        
      </div>
    </Fragment>
  );
};

export default NotesList;
