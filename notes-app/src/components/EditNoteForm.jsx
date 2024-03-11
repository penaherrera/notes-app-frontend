// src/components/EditNoteForm.js
import React, { useState, useEffect } from 'react';
import { editNote } from '../api/apiMethods';
import { Link, useParams } from 'react-router-dom';
import '../styles/EditNoteForm.css';

const EditNoteForm = () => {
  const { noteId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isArchived, setIsArchived] = useState(false);

  const handleEditNote = async () => {
    try {
      const noteData = {
        title,
        content,
        archived: isArchived ? 1 : 0,
      };

      await editNote(noteId, noteData);

      console.log('Note edited successfully');
      window.location.replace('/');
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };

  return (
    <div className="edit-form-container">
      <label className="title-label">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label className="content-label">Content:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />

      <div className="archived-checkbox">
        <label>
          <p>Archive this note</p>
          <input
            type="checkbox"
            checked={isArchived}
            onChange={(e) => setIsArchived(e.target.checked)}
          />
        </label>
      </div>

      <div className="buttons-container">
        <div className="button-container">
          <button onClick={handleEditNote} className='edit-link'>
            Edit Note
          </button>
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

export default EditNoteForm;
