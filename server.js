/**
 * COMP4537 - Lab3
 * Victor Liu - A00971668 - set C
 * 
 * Server file for COMP4537
 * 
 * Note: code generated by ChatGPT has been commented where used.
 */

var http = require('http');
const path = require('path');
const url = require('url');
const { getDate, convertDateToString, formatMessageGreeting, getContentType, serveStaticFile } = require('./Lab3/modules/utils');
const { greeting } = require('./Lab3/lang/en/en');


// CHATGPT: Create the HTTP server
http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Root route ('/') to serve home.html
    if (parsedUrl.pathname === '/') {
        const filePath = path.join(__dirname, 'home.html');
        serveStaticFile(res, filePath, 'text/html');

        // Serve static files from /COMP4537/labs/0
    } else if (parsedUrl.pathname.startsWith('/COMP4537/labs/0')) {
        const filePath = path.join(__dirname, 'Lab0', parsedUrl.pathname.replace('/COMP4537/labs/0', ''));
        serveStaticFile(res, filePath, getContentType(filePath));

        // Serve static files from /COMP4537/labs/1
    } else if (parsedUrl.pathname.startsWith('/COMP4537/labs/1')) {
        const filePath = path.join(__dirname, 'Lab1', parsedUrl.pathname.replace('/COMP4537/labs/1', ''));
        serveStaticFile(res, filePath, getContentType(filePath));

        // Serve static files from /COMP4537/labs/3
    } else if (parsedUrl.pathname.startsWith('/COMP4537/labs/3') && parsedUrl.pathname !== '/COMP4537/labs/3/getDate') {
        const filePath = path.join(__dirname, 'Lab3', parsedUrl.pathname.replace('/COMP4537/labs/3', ''));
        serveStaticFile(res, filePath, getContentType(filePath));

        // Handle the /COMP4537/labs/3/getDate route
    } else if (parsedUrl.pathname === '/COMP4537/labs/3/getDate') {
        console.log("API endpoint: /getDate, Name:", name);
        const name = parsedUrl.query.name || 'Guest'; // Get the 'name' query parameter or default to 'Guest'
        const currentDateTime = getDate(); // Get the current date and time

        // Format the greeting message with the name and date
        const message = formatMessageGreeting(greeting, name, currentDateTime);

        // Send the response with inline CSS for blue color
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<div style="color:blue;">${message}</div>`);

    // Handle 404 Not Found for unrecognized routes
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3000, () => {
    console.log('Server is running on HTTPS and listening on port 3000');
});
