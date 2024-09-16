/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * reader.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the notes container
    const notesContainer = document.getElementById('notes-container');

    // Disable editing for all textareas within notes
    const textareas = notesContainer.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.disabled = true; // Disable editing
    });
    // noteManager.loadNotes();

    // const clock = new Clock();
    // const noteManager = new NoteManager();
    setInterval(() => {
        clock.updateClock();
        noteManager.getNotesFromStorage();
  
    }, 2000);
});