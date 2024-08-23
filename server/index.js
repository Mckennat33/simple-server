fs = require('fs')

const content = 'content'
const moreContent = 'this is more content appended'

fs.writeFile("/Users/thomasmckenna/simple-server/server/test.txt", content, err => {
    if (err) {
        console.log(err) 
    } else {
        console.log(content)
    } 
}); 


fs.appendFile("/Users/thomasmckenna/simple-server/server/test.txt", moreContent, err => {
    if (err) {
        console.log(err) 
    } else {
        console.log(content)
    } 
}); 

