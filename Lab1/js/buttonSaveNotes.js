/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * buttonSaveNotes.js
 * 
 * This button handles saving all notes to local storage via click event listener. It depends on a `Note` object.
 */

class ButtonSaveNotes {
    constructor() {
        this.button = document.createElement("button");
        this.button.innerHTML = "Save";
        this.button.addEventListener('click', () => this.saveNotes());
        document.body.appendChild(this.button);
    }

    saveNotes(notes) {
        console.log("Manually saving notes to local storage..");

        let notesFromStorage = JSON.parse(localStorage.getItem("notes"));
        if (notesFromStorage == null) {
            notesFromStorage = [];
        }

    // used CHATGPT to find efficient solution to checking if note exists and for overwriting (lines 28~37):
    // Convert the notes from storage into a Map for faster lookup by id
    const notesMap = new Map(notesFromStorage.map(note => [note.id, note]));

    // Loop through the incoming notes and overwrite or add them to the map
    notes.forEach(note => {
        notesMap.set(note.id, note);  // This will overwrite if the id exists, or add a new one
    });

    // Convert the map back to an array and save it to local storage
    localStorage.setItem("notes", JSON.stringify(Array.from(notesMap.values())));
    }
}
