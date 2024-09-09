
// import { TextBox } from "./textbox";

/**  
 * COMP4537 - Lab 0
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-08
*/ 

class Game {
    constructor() {
        this.textbox = new TextBox();
        this.buttons = [];
        this.correctOrder = [];
        this.userOrder = [];
    }

    // function to start new game. Uses value of number input from HTML
    startNewGame(numButtons) {
        // const textBox = new TextBox("400px", "300px");
        // this.textbox = textBox;
        // setTimeout(() => {
        //     this.textbox.sendSuccessMessage();
        // }, 2000);
        if (numButtons < 3 || numButtons > 7 || !numButtons) {
            alert("Please enter a number between 3 and 7.");
            return;
        }
        // this.removeCurrentButtons();
        this.addNewButtons(numButtons);
        this.scrambleButtons(numButtons);
    }

    //asked ChatGPT for code to remove existing text content
    endCurrentGame() {
        const textBoxHTMLContainer = document.getElementById("defaultTextBox");
        if (this.textbox && this.textbox.textDiv) {
            textBoxHTMLContainer.removeChild(this.textbox.textDiv);
        }
        console.log("Clearing textbox");
        this.removeCurrentButtons();
        console.log("Clearing buttons");
    }

    removeCurrentButtons() {
        this.buttons.forEach(button => button.remove());
        this.buttons = [];
        this.correctOrder = [];
        this.userOrder = [];
    }


    // asked ChatGPT to implement logic to add new buttons within #mainGameWindow
    addNewButtons(numButtons) {
        const container = document.getElementById("mainGameWindow");
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
        const buttonWidth = 100; // Adjust width (in pixels) if needed
        const buttonHeight = 50; // Adjust height (in pixels) if needed
        const padding = 10; // Padding between buttons (in pixels)

        let top = 0;
        let left = 0;
        let buttonsPerRow = Math.floor((containerWidth - padding) / (buttonWidth + padding));

        for (let i = 0; i < numButtons; i++) {
            const randomColor = this.getRandomColor();

            // Calculate button position
            left = (i % buttonsPerRow) * (buttonWidth + padding);
            top = Math.floor(i / buttonsPerRow) * (buttonHeight + padding);

            // Ensure button does not overflow the container
            if (left + buttonWidth > containerWidth) {
                left = 0; // Start new row
                top += buttonHeight + padding;
            }

            if (top + buttonHeight > containerHeight) {
                break; // Stop adding buttons if there's no more space
            }

            // Position button relative to the container
            const buttonTop = containerRect.top + top;
            const buttonLeft = containerRect.left + left;

            // const newButton = new Button(randomColor, `${buttonWidth}px`, `${buttonHeight}px`, `${buttonTop}px`, `${buttonLeft}px`, i + 1);
            // this.buttons.push(newButton);
            // this.correctOrder.push(newButton);
            const newButton = new Button(randomColor, `${buttonWidth}px`, `${buttonHeight}px`, `${buttonTop}px`, `${buttonLeft}px`, i + 1);
            newButton.btn.innerText = i + 1; // Set the button's text to the order number
    
            this.buttons.push(newButton);
            this.correctOrder.push(newButton);
        }
    }

    // Googled "Javascript random colour generator"
    getRandomColor() {
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += hexArray[Math.floor(Math.random() * 16)];
        }
        return `#${code}`
    }

    // asked chatGPT to implement scrambling logic
    scrambleButtons(numButtons) {
        setTimeout(() => {
            let scrambleCount = numButtons;
    
            const scrambleInterval = setInterval(() => {
                this.buttons.forEach(button => {
                    // Get the container and its dimensions
                    const container = document.getElementById("mainGameWindow");
                    const containerRect = container.getBoundingClientRect();
    
                    const buttonHeight = parseInt(button.btn.style.height); // Get button's height
                    const buttonWidth = parseInt(button.btn.style.width);   // Get button's width
    
                    // Calculate max values so the buttons stay inside the container
                    const maxTop = containerRect.height - buttonHeight;
                    const maxLeft = containerRect.width - buttonWidth;
    
                    // Generate random positions within the container
                    const randomTop = Math.floor(Math.random() * maxTop) + containerRect.top + "px";
                    const randomLeft = Math.floor(Math.random() * maxLeft) + containerRect.left + "px";
    
                    // Apply the new positions (relative to the container)
                    button.btn.style.position = "absolute"; // Ensure buttons are absolutely positioned
                    button.btn.style.top = `${randomTop}`;
                    button.btn.style.left = `${randomLeft}`;
                });
    
                scrambleCount--;
                if (scrambleCount === 0) {
                    clearInterval(scrambleInterval);
                    this.makeButtonsActive();
    
                    // Clear the button text after a 1-second delay
                    setTimeout(() => {
                        this.clearButtonText();
                    }, 1500); // 1-second delay
                }
            }, 2000); 
        }, numButtons * 1000); 

        window.addEventListener("resize", () => {
            this.resizeButtons();
        });
    }

    // helper function to hide button text after scrambling
    clearButtonText() {
        this.buttons.forEach(button => {
            button.btn.innerText = ""; 
        });
    }

    // asked chatGPT to implement logic to move buttons as window is resized
    resizeButtons() {
        const container = document.getElementById("mainGameWindow");
        const containerRect = container.getBoundingClientRect();
    
        this.buttons.forEach(button => {
            const buttonHeight = parseInt(button.btn.style.height);
            const buttonWidth = parseInt(button.btn.style.width);
    
            // Calculate new random positions within the container
            const maxTop = containerRect.height - buttonHeight;
            const maxLeft = containerRect.width - buttonWidth;
    
            const randomTop = Math.floor(Math.random() * maxTop) + containerRect.top + "px";
            const randomLeft = Math.floor(Math.random() * maxLeft) + containerRect.left + "px";
    
            // Reposition the buttons
            button.setLocation(randomTop, randomLeft);
        });
    }

    // make buttons active or clickable
    makeButtonsActive() {
        this.buttons.forEach(button => {
            button.btn.setAttribute("data-is-active", "true");
            button.btn.addEventListener("click", () => {
                this.handleButtonClick(button);
            });
        });
    }

    // asked ChatGPT to handle clicking and order logic for buttons
    handleButtonClick(button) {
        this.userOrder.push(button.order);

        // Reveal button number
        button.btn.innerText = button.order;

        // Check if the user is clicking the buttons in the correct order
        const isCorrectOrder = this.checkUserOrder();
        if (!isCorrectOrder) {
            // alert("Wrong order!");
            this.textbox.sendFailMessage();
            this.revealCorrectOrder();
            return;
        }

        if (this.userOrder.length === this.correctOrder.length) {
            // alert("Excellent memory!");
            this.textbox.sendSuccessMessage();
        }
    }

    // helper function to check user order
    checkUserOrder() {
        for (let i = 0; i < this.userOrder.length; i++) {
            if (this.userOrder[i] !== this.correctOrder[i].order) {
                return false;
            }
        }
        return true;
    }

    // asked chatGPT to implement logic to reveal button order number
    revealCorrectOrder() {
        this.correctOrder.forEach(button => {
            button.btn.innerText = button.order;
        });
    }
}