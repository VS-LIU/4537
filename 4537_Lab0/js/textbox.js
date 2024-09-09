// import { messageExcellentMemory, messageWrongOrder } from '../lang/messages/en/user.js'

/**  
 * COMP4537 - Lab 0
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-08
*/ 

class TextBox {
    constructor(width = '100vw', height = '50px', top, left) {

        
        this.textDiv = document.createElement("div");
        // this.textDiv.style.backgroundColor = "#b8b8b8";
        this.textDiv.style.width = width;
        this.textDiv.style.height = height;
        this.textDiv.style.display = 'flex';  // Use flexbox
        this.textDiv.style.justifyContent = 'center';  // Center horizontally
        this.textDiv.style.alignItems = 'center';  // Center vertically
        // this.textDiv.setAttribute("data-is-active", "false");
        document.getElementById("defaultTextBox").appendChild(this.textDiv);
        this.setLocation(top, left);
    }

    // Class method: sets the location of the textbox
    setLocation(top, left) {
        this.textDiv.style.top = top;
        this.textDiv.style.left = left;
    };

    // Class method: removes existing text content 
    removeExistingTextContent() {
        let oldParagraphs = this.textDiv.querySelectorAll("p");
        oldParagraphs.forEach((p) => {
            this.textDiv.removeChild(p);
        });
    }

    // Class method: inserts success message
    sendSuccessMessage() {
        this.removeExistingTextContent();
        var textContentNew = document.createElement("p");
        textContentNew.innerText = messageExcellentMemory;
        this.textDiv.appendChild(textContentNew);
    }

    // Class method: inserts failure message
    sendFailMessage() {
        this.removeExistingTextContent();
        var textContentNew = document.createElement("p");
        textContentNew.innerText = messageWrongOrder;
        this.textDiv.appendChild(textContentNew);
    }
}