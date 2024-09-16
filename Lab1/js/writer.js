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
