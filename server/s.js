const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client')))
// const contactRoute = require('../routes/contact.routes.js')

app.get('/home', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../client/home.html'))
    } catch(err) {
        console.log(err)
    }
})

app.post('/test', (req, res) => {
    const { name, username } = req.body

    console.log(name, username)


    // try {

    // } catch(err) {
    //     console.log(err)
    // }   
})

app.listen(PORT, function(err) {
    if (err) console.log('Error in server setup')
    console.log(`Server listeing on Port ${PORT}`)
}) 