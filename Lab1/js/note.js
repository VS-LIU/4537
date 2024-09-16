/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * note.js
 * 
 * A note object.
 */


class Note {
    constructor(id) {
        this.id = id;
        this.isSaved = false;

        this.noteElement = this.createNoteElement();
    }

    //asked CHATGPT to help me create a note with real-time typing
    createNoteElement() {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note-base');
        noteDiv.setAttribute('id', this.id);

        // Create the textarea inside the note for real-time typing
        const textarea = document.createElement('textarea');
        textarea.addEventListener('input', (e) => this.updateText(e));

        // Append the textarea to the note
        noteDiv.appendChild(textarea);

        
       return noteDiv;
    }

    updateText(event) {
        const text = event.target.value;
        console.log(`Note ${this.id} content: `, text);
    
    }

    getNoteElement() {
        return this.noteElement;
    }
}
