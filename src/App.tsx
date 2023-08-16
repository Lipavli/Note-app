import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./components/NewNote";
import NotesList from "./components/NotesList";
import useNotes from "./hooks/useNotes";

function App() {

  const {createNote} = useNotes();

  return (
    <Routes>
      <Route path="/" element={<NotesList/>}></Route>
      <Route path="/new" element={<NewNote onSubmit={createNote} />}></Route>
      <Route path="/:id">
        <Route index element={<h1>Show</h1>} />
        <Route index path="edit" element={<h1>Edit</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
