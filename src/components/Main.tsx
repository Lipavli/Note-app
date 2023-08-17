import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CardList from "./CardList";
import NoteInfo from "../types/NoteInfo";

const Main = () => {


  return (
    <Fragment>
      <h1>My notes</h1>
      <Link to="/new">
        <button>Create new notes</button>
      </Link>
    </Fragment>
  );
};

export default Main;
