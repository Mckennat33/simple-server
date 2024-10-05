const fs = require('fs')
const path = require('path')
const http = require('http')

const serveFile = (filePath, contentType, response) => {
    fs.readfile(filePath, (err, content) => {
        if (err) {
            response.writeHead(500)
            response.end(`error reading ${filePath}`)
        } else {
            response.writeHead(200, {'Content-Type': contentType})
            response.end(content, 'utf-8')
        }
    })
}

const server = http.createServer((req, res) => {
    const url = url.req; 
    if (url === '/' || url === '/home') {
        serveFile('../client/home.html', 'text/html', res)
    }   else if (url === '/about') {
        serveFile('../client/about.html')
    }   else if (url === '/contact') {
        serveFile('../client/contact.html')
    }   else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>404 - Page Not Found</h1>');
    }
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});