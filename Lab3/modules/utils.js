/**
 * COMP4537 - Lab3
 * Victor Liu - A00971668 - set C
 * 
 * utils.js
 */


const fs = require('fs');
const path = require('path');


function getDate() {
    const date = new Date();
    return date.toString(); 
  }
  
function convertDateToString(date) {
    console.log("convertDateToString: ", date.toString());
    return date.toString();
}

function formatMessageGreeting(greeting, name, date) {
    return greeting.replace('%name%', name).replace('%date%', date);
}


// ChatGPT: to determine the content type based on file extension
function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
      case '.html': return 'text/html';
      case '.css': return 'text/css';
      case '.js': return 'application/javascript';
      case '.png': return 'image/png';
      case '.jpg': return 'image/jpeg';
      case '.gif': return 'image/gif';
      default: return 'application/octet-stream';
    }
  }


// ChatGPT: Function to serve static files
function serveStaticFile(res, filePath, contentType, statusCode = 200) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      } else {
        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  }
  

  module.exports = {
    getDate, convertDateToString, formatMessageGreeting, getContentType, serveStaticFile
  };