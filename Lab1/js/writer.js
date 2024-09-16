/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * writer.js
 */ 





const msg_notSupported = "Sorry web Storage is not supported!";
const msg_key = "hidden secret";
const msg_written="A piece of data was written in local storage for the key:"
;
if (typeof (Storage) == "undefined") {
document.write(msg_notSupported);
window.stop();
}


const noteManager = new NoteManager();
const buttonCreateNote = new ButtonCreateNote(noteManager);
const buttonSaveNotes = new ButtonSaveNotes(noteManager);
buttonSaveNotes.buttonAddEventListener();

// function initializeNotes() {
//     const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     savedNotes.forEach(noteData => {
//         // Create and add note based on saved data
//         const note = new Note(noteData.id, noteData.top, noteData.left);
//         note.text = noteData.text; // Restore the text content
//         noteManager.notes.push(note);
//         document.getElementById("notes-container").appendChild(note.getNoteElement());
//     });
// }
// initializeNotes();