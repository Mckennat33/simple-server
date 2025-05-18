require('dotenv').config()
const express = require('express')
const app = express()
const aboutRoute = require('../routes/about.route.js')
const PORT = process.env.PORT || 5000

app.get('/')
app.get('/about', aboutRoute)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})