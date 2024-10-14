const express = require("express")

const app = express()
const Joi = require("joi")
// middleware 
app.use(express.json())

// made an array of courses 
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]

app.get('/', (req, res) => {
    res.send('Hello World!!!!')
})

app.get("/api/courses", (req, res) => {
    res.send(courses)
})


// get request for the course and their id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course with the given ID was not found')
    res.send(course)
})  

// put request 
app.put('/api/courses/:id', (req,res) => {
    // look up the course
    // if not exist, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course with the given ID was not found')

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); // result.error

    if (error) {
        res.status(400).send(result.error.details[0].message)
        return; 
    }

    //update course
    course.name = req.body.name;
    //return updated course
    res.send(course)
})

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.ValidationError(course, schema)

}


// port request 
app.post("/api/course", (req, res) => {
    const { error } = validateCourse(req.body); // result.error

    if (error) {
        res.status(400).send(result.error.details[0].message)
        return; 
    }

    const course = {
        id: course.length + 1, 
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})









const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

