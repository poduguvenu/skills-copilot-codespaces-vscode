// Create web server
// Create a web server that listens to requests on port 3000.
// When a client makes a request, the server should respond with the content of the file comments.json.
// The server should respond to any GET request with the file contents.
// Use the fs module to read the file. The file will be in the same directory as the server script.
// Don't use the fs.readFile method to read the file. Instead, use the fs.createReadStream method.
// Don't use the fs.readFileSync method.
// Don't use the fs.createReadStream method more than once.

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('./comments.json');
    readStream.pipe(res);
});

server.listen(3000);