
// making a server
fs = require('fs')
const http = require('http')


const server = http.createServer((req, res) => {
    res.write('Response from server')
    res.end()
})

server.listen((3000), () => {
    console.log('my server is running')
})


// test notes

