const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client')))
// const contactRoute = require('../routes/contact.routes.js')

const user = {
    id: 1, 
    name: 'Jerry', 
    username: 'UsernameJerry', 
    email: 'jerryemail@gmail.com'
}

app.get('/home', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../client/home.html'))
    } catch(err) {
        console.log(err)
    }
})

app.get('/user', (req, res) => {
    const { id, name, username, email } = req.params 
    console.log(req.params)
    console.log('hello')
    res.send(user)
})

app.post('/test', (req, res) => {
    const { name, username, email } = req.body
    // res.send(name, username)
    res.send(`username: ${username}, name: ${name}`)
    if (!email) {
        console.log("no email given")
    } else {
        console.log(email)
    }
    console.log(name, username)
})



app.listen(PORT, function(err) {
    if (err) console.log('Error in server setup')
    console.log(`Server listeing on Port ${PORT}`)
}) 