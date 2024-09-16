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
    const disableTextAreas = () => {
        const textareas = notesContainer.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.disabled = true; // Disable editing
        });
    };
    disableTextAreas(); // Disable editing again after updating

    
    const hideDeleteButtons = () => {
        const deleteButtons = notesContainer.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.style.display = 'none'; // Hide delete buttons
        });
    };
    hideDeleteButtons();


    setInterval(() => {
        noteManager.getNotesFromStorage();
        noteManager.updateNotes(); // Update notes based on localStorage changes
    }, 2000);

    // Update the notes if the "notes" key in localStorage changes in other tabs
    window.addEventListener('storage', (event) => {
        if (event.key === 'notes') {
            console.log("STORAGE CHANGED")
            noteManager.getNotesFromStorage();
            noteManager.updateNotes(); // Update notes based on localStorage changes
            disableTextAreas();
            hideDeleteButtons();
        }
    });
});