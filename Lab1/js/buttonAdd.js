/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonAdd.js
 */

class ButtonAdd {
    constructor() {
        this.button = document.createElement("button");
        this.button.innerHTML = "Add Note";
        this.button.addEventListener('click', () => this.addNote());
        document.body.appendChild(this.button);
    }

    addNote(note) {
        console.log("Adding note...");
        if (note instanceof Note) {
            let noteBody = note.body;
            let newNote = new Note(noteBody);
            newNote.storeNote();
        } else {
            console.log("Failed to add note. Valid note not found.");
            return;
        }
    }



}