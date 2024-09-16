/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * script.js
 */

const clock = new Clock();
setInterval(() => {
    clock.updateClock();
    buttonSaveNotes.saveNotes();
}, 2000);