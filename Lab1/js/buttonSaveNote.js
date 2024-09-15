/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonSaveNote.js
 * 
 * This button handles saving all notes to local storage via JSON. It depends on a `Note` object.
 */

class ButtonSaveNote {
    constructor(note) {
        this.note = note;
        this.button = document.createElement("button");
        this.button.innerHTML = "Save";
        this.button.addEventListener('click', () => this.saveNote(this.note));
        document.body.appendChild(this.button);
    }


    saveNote(note) {
        console.log("Manually saving notes to local storage..");

        let notes = JSON.parse(localStorage.getItem("notes"));
        if (notes == null) {
            notes = [];
        }

        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}
