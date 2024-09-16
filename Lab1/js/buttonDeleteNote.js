/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonDeleteNote.js
 * 
 * This button handles deleting a note from local storage
 */ 


class ButtonDeleteNote {
    constructor(note) {
        this.note = note;
        this.button = document.createElement("button");
        this.button.innerHTML = "Delete";
        this.button.addEventListener('click', () => this.deleteNote(this.note));
        document.body.appendChild(this.button);
    }

    deleteNote(note) {
        let notes = JSON.parse(localStorage.getItem("notes"));
        if (notes == null) {
            notes = [];
        }
        notes = notes.filter((noteFiltered) => noteFiltered.id != note.id);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}
