/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonCreateNote.js
 * 
 * This button handles creating a new note object.
 */


class ButtonCreateNote {
    constructor(noteManager) {
        this.button = document.getElementById("createNote");
        this.noteManager = noteManager;
        this.button.addEventListener('click', () => this.createNote());
    }

    createNote() {
        const newNote = this.noteManager.createNote();
        const frontendNotesDisplay = document.getElementById("notes-container");
        frontendNotesDisplay.appendChild(newNote.getNoteElement());
    }
}