/**
 * COMP4537 - Lab3
 * Victor Liu - A00971668 - set C
 * 
 * utils.js
 */


function getDate() {
    const date = new Date();
    return date.toString(); 
  }
  
function convertDateToString(date) {
    console.log("convertDateToString: ", date.toString());
    return date.toString();
}

function formatMessageGreeting(greeting, name, date) {
    return greeting.replace('%name', name).replace('%date', date);
}


  module.exports = {
    getDate, convertDateToString, formatMessageGreeting
  };