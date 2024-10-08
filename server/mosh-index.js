const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!!!!')
})

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3])
})


// /api/course/1
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params)
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

