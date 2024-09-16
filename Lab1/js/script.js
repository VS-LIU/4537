/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * script.js
 */

const clock = new Clock();
// const button = new ButtonSaveNotes();
const notesA = []
const testObj = {
    "id": 23
}

notesA.push(testObj)

setInterval(() => {
    clock.updateClock()
    ButtonSaveNotes.saveNotes(notesA);
}, 2000);
