const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname, '../src')))
// const contactRoute = require('../routes/contact.routes.js')

app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../client/home.html'))
    } catch(err) {
        console.log(err)
    }
})

app.post('/', (req, res) => {
    // try {

    // } catch(err) {
    //     console.log(err)
    // }   
})

app.listen(PORT, function(err) {
    if (err) console.log('Error in server setup')
    console.log(`Server listeing on Port ${PORT}`)
}) 