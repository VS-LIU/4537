/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * clock.js
 */ 

class Clock {
    constructor() {
        this.date = new Date();
    }

    getTime() {
        return this.date.toLocaleTimeString();
    }

    getDate() {
        return this.date.toLocaleDateString();
    }

    getDateTime() {
        return this.date.toLocaleString();
    }

    update() {
        this.date = new Date();
    }

}