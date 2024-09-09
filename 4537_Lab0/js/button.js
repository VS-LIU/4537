/**  
 * COMP4537 - Lab 0
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-08
*/ 

// used ChatGPT to convert instructor-provided code into JS class syntax code (lines 4~23)
class Button {
    constructor(color, width, height, top, left, order) {
        this.order = order;
        this.btn = document.createElement("button");
        this.btn.style.backgroundColor = color;
        this.btn.style.width = width;
        this.btn.style.height = height;
        this.btn.style.position = "absolute";
        this.btn.style.top = top;
        this.btn.style.left = left;
        this.btn.setAttribute("data-order", order);
        document.getElementById("mainGameWindow").appendChild(this.btn);

        if (this.isColorDark(color)) {
            this.btn.style.color = "white";  // Light text for dark backgrounds
        } else {
            this.btn.style.color = "black";  // Dark text for light backgrounds
        }
    
        // Set location during initialization
        // this.setLocation(top, left);
    }

    // Method to set location
    setLocation(top, left) {
        this.btn.style.top = top;
        this.btn.style.left = left;
    }

    remove() {
        this.btn.remove();
    }

    // asked ChatGPT to implement logic to adjust text colour based on button colour
    isColorDark(hexColor) {
        let r = parseInt(hexColor.substring(1, 3), 16);
        let g = parseInt(hexColor.substring(3, 5), 16);
        let b = parseInt(hexColor.substring(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
    }

}




// let arrayButtons = [];

// arrayButtons.push(new Button("Red", "100px", "100px", "0px", "0px", 0)); 
// arrayButtons.push(new Button("Blue", "200px", "100px", "200px", "200px", 1)); // this has to be in a separate function, e.g. moveRandom or something 
// setInterval(function () {
//     arrayButtons[0].setLocation(
//         Math.floor(Math.random() * 100) + "px", 
//         Math.floor(Math.random() * 100) + "px");
//     }, 500);
