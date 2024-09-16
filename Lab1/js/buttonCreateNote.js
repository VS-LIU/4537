/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonCreateNote.js
 * 
 * This button handles creating a new note object.
 * 
 * note: code generated by ChatGPT has been commented where used.
 */


class ButtonCreateNote {
    constructor(noteManager) {
        this.button = document.getElementById("createNote");
        this.noteManager = noteManager;
        this.button.addEventListener('click', () => this.createNote());
        this.lastNote = null; 
    }

    createNote() {
        let top, left;

        // asked CHATGPT to help determine positioning logic
        if (this.lastNote) {
            const nextPosition = Note.getNextPosition(this.lastNote);
            top = nextPosition.top;
            left = nextPosition.left;
        } else {
            top = 50;
            left = 50;
        }

        const newestNote = this.noteManager.createNote(top, left);
        const frontendNotesContainer = document.getElementById("notes-container");
        frontendNotesContainer.appendChild(newestNote.getNoteElement());

        // Update the reference to the last note
        this.lastNote = newestNote;
    }
}