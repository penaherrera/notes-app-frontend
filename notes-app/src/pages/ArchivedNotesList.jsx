// src/components/ArchivedNotesList.js
import React, { useState, useEffect } from 'react';
import { getArchivedNotes, deleteNote } from '../api/apiMethods';
import { Link } from 'react-router-dom';
import '../styles/NotesList.css'; 

const ArchivedNotesList = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getArchivedNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    console.log('Fetching archived notes on mount');
    fetchNotes();
  }, []);

  const handleDeleteNote = async (noteId) => {
    try {
      console.log('Deleting archived note with ID:', noteId);
      await deleteNote(noteId);
      console.log('Archived note deleted successfully');
      setNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== noteId));
    } catch (error) {
      console.error('Error deleting archived note:', error);
    }
  };

  return (
    <div className="notes-list-container">
      <h2 className="notes-list-title">Archived Notes</h2>
      <ul style={{ listStyle: 'none' }}>
        {notes.map((note) => (
          <li key={note.noteId} className="notes-list-item">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button className="delete-button" onClick={() => handleDeleteNote(note.noteId)}>
              Delete
            </button>
            <Link to={`/edit/${note.noteId}`} className="edit-button">
              Edit
            </Link>
          </li>
        ))}
      </ul>
      <div className='links-container'>
        <Link to="/create" className="create-link">Create a new note</Link>
        <Link to="/" className="active-link">Active Notes</Link>
      </div>
    </div>
  );
};

export default ArchivedNotesList;
