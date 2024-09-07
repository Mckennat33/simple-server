
// making a server
fs = require('fs')
const http = require('http')
const path = require('path')

const serveFile = (filePath, contentType, response) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(500);
            response.end("Error while loading page");
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
};

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/' || url === '/home') {
        serveFile(path.join(__dirname, 'client/home.html'), 'text/html', res);
    } else if (url === '/about') {
        serveFile(path.join(__dirname, 'client/about.html'), 'text/html', res);
    } else if (url === '/contact') {
        serveFile(path.join(__dirname, 'client/contact.html'), 'text/html', res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});



const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// const server = http.createServer((req, res) => {
//     res.write('Response from server')
//     res.end()
// })

// server.listen((3000), () => {
    
// })


