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


function appendToFile(filePath, text, callback) {
    const dir = path.dirname(filePath);

    // Ensure the directory exists
    fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            return callback(err);
        }

        // Append text to the file, creating it if it doesn't exist
        fs.appendFile(filePath, `${text}\n`, (err) => {
            callback(err);
        });
    });
}

//ChatGPT: Read the data from file
function readFileContent(filePath, res) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end(`404 Not Found: ${filePath}`);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
}

module.exports = {
    getDate, convertDateToString, formatMessageGreeting, getContentType, serveStaticFile, appendToFile, readFileContent
};