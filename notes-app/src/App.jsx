// src/containers/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateNotes from './pages/CreateNotes';
import NotesList from './pages/NotesList';
import ArchivedNotesList from './pages/ArchivedNotesList';
import EditNote from './pages/EditNote';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesList />} />
      <Route path="/create" element={<CreateNotes />} />
      <Route path="/archived" element={<ArchivedNotesList />} />
      <Route path="/edit/:noteId" element={<EditNote />} />
    </Routes>
  );
};

export default App;
