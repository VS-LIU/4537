/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * note.js
 * 
 * The NoteManager class handles the notes.
 */

class NoteManager {
    constructor() {
        this.notes = [];
        this.nextId = 1;
    }

    createNote() {
        const note = new Note(this.nextId++);
        this.notes.push(note);
        return note;
    }
}