fs = require('fs')

const content = 'content'

fs.writeFile("/Users/thomasmckenna/simple-server/server/test.txt", content, err => {
    if (err) {
        console.log(err) 
    } else {
        console.log(content)
    } 
}); 

