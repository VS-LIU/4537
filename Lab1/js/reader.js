/**
 * COMP4537 - Lab 1
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-15
 * 
 * reader.js
 */ 

const msg_notSupported = "Sorry web Storage is not supported!";
const msg_key = "hidden secret";
const msg_read="stored data for the key ";
if (typeof (Storage) == "undefined") {
document.write(msg_notSupported);
window.stop();
}
document.write(msg_read+msg_key+":"+localStorage.getItem(msg_key));