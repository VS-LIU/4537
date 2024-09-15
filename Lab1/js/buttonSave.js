/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonAdd.js
 */

class ButtonSave {
    constructor(note) {
        this.note = note;
        this.button = document.createElement("button");
        this.button.innerHTML = "Save";
        this.button.addEventListener('click', () => this.saveNote());
        document.body.appendChild(this.button);
    }

    
    saveNote(note) {
        if (note instanceof Note) {
            console.log("Saving note: ", node.id);
            let noteBody = note.body;
            let newNote = new Note(noteBody);
            newNote.storeNote();
        } else {
            console.log("Failed to save note. Valid note not found.");
            return;
        }
    }



}