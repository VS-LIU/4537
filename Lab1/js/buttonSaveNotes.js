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
    constructor(noteManager) {
        this.noteManager = noteManager;
    }

    buttonAddEventListener() {
        this.button = document.getElementById("saveNotes");
        this.button.addEventListener('click', () => this.saveNotes());
    }

    
    saveNotes() {
        this.noteManager.saveNotes();
    }
}
//     saveNotes() {
//         console.log("Saving notes to local storage..");

//         const notes = this.noteManager.getNotes();

//         localStorage.setItem("notes", JSON.stringify(notes));

//         const event = new Event("notesSaved");
//         document.dispatchEvent(event);
//     }
// }
