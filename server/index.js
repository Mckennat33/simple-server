
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


// writing files 
// const content = 'content'
// const moreContent = 'this is more content appended'



// fs.writeFile("/Users/thomasmckenna/simple-server/server/test.txt", content, err => {
//     if (err) {
//         console.log(err) 
//     } else {
//         console.log(content)
//     } 
// }); 


// fs.appendFile("/Users/thomasmckenna/simple-server/server/test.txt", moreContent, err => {
//     if (err) {
//         console.log(err) 
//     } else {
//         console.log(moreContent)
//     } 
// }); 

