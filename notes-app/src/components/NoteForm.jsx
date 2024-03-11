// src/components/NoteForm.js
import React, { useState } from 'react';
import { createNote } from '../api/apiMethods';
import { Link } from 'react-router-dom';
import '../styles/NoteForm.css';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateNote = async () => {
    try {
      const noteData = {
        title,
        content,
        archived: 0,
      };

      const createdNote = await createNote(noteData);

      console.log('Note created:', createdNote);
      window.location.replace('/');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="note-form-container">
      <label className="title-label">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label className="content-label">Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <div className="buttons-container">
        <div className="button-container">
          <button onClick={handleCreateNote} className='create-link'>Create Note</button>
        </div>
        <div className="button-container">
          <Link to="/" className="goBack-link">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
