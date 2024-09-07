
// making a server
fs = require('fs')
const http = require('http')
const path = require('path')

const serverFile = (filePath, contentType, response) = {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(500)
            response.end("Error while loading page")
        } else {
            response.writeHead(200, ,'Content-Type: ' contentType)
            response.end(content, 'utf-8')
        }
    })
}

const server = http.createServer((req, res) => {
    // parse the URL
    const url = req.url;

    if (url === '/' || url === '/home') {
        serveFile()
    }

    
})

const PORT = 3000; 

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


// const server = http.createServer((req, res) => {
//     res.write('Response from server')
//     res.end()
// })

// server.listen((3000), () => {
    
// })


