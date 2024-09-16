/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * writer.js
 */



if (typeof (Storage) == "undefined") {
    document.write(msg_notSupported);
    window.stop();
}

const noteManager = new NoteManager();
const buttonCreateNote = new ButtonCreateNote(noteManager);
const buttonSaveNotes = new ButtonSaveNotes(noteManager);
buttonSaveNotes.buttonAddEventListener();
