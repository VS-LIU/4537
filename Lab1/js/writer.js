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
localStorage.setItem(msg_key, "2021");
document.write(msg_written+msg_key);