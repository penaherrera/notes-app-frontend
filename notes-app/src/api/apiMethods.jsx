// src/services/api.js
const API_URL = 'http://localhost:8080';

export const createNote = async (noteData) => {
  try {
    const response = await fetch(`${API_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      throw new Error('Failed to create note');
    }

    return response.json();
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

export const getActiveNotes = async () => {
  try {
    const response = await fetch(`${API_URL}/notes`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const getArchivedNotes = async () => {
  try {
    const response = await fetch(`${API_URL}/notes/archived`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch notes');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete note');
    }

    return response;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};

export const editNote = async (noteId, noteData) => {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      throw new Error('Failed to edit note');
    }

    return response.json();
  } catch (error) {
    console.error('Error editing note:', error);
    throw error;
  }
};