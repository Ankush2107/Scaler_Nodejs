const express = require('express')

const morgan = require('morgan')

const myMiddleWareFunction = require('./middlewares/middle')
const myMiddleWareFunction2 = require('./middlewares/middle_2')
 

const app = express()

// get, post, put, delete

app.use(express.json())


app.use(myMiddleWareFunction)

app.use(myMiddleWareFunction2)

app.use(morgan('tiny'))


let courses = [
    {id: 1, coursename: 'JavaScript'},
    {id: 2, coursename: 'Java'},
    {id: 3, coursename: 'Python'},
    {id: 4, coursename: 'C++'},
]


// app.get('/', (req, res) => {
//     res.send('Hello from scaler topics')
// })

// app.get('/about', (req, res) => {
//     res.send('We create impact')
// })


// app.get('/contact', (req, res) => {
//     res.send('I know this men')
// })


app.get('/courses', (req, res) => {
    res.send(courses)
}) // Read


app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1, 
        coursename: req.body.coursename
    }

    courses.push(course)
    res.send(course)
}) //Create



app.put('/courses/:coursename', (req, res) => {
    let course = courses.find(course => course.coursename === req.params.coursename)

    if(!course) res.status(404).send('The course you are looking for does not exist.')

    course.coursename = req.body.coursename
    res.send(course)
}) // Change, Update



// app.delete('/courses/:coursename', (req, res) => {

//     let updatedCourses = courses.filter(course => course.name !== req.params.coursename)

//     course = updatedCourses

//     res.send(courses);

// }) // Delete


app.delete('/courses/:id', (req,res) => {

    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('The course you are looking for does not exist.')

    const index = courses.indexOf(course)

    courses.splice(index, 1)

    res.send(course)

})


// Route Parameters

app.get('/courses/:coursename', (req, res) => {
    let course = courses.find(course => course.coursename === req.params.coursename)

    if(!course) res.status(404).send('The course you are looking for does not exist.')

    res.send(course)

})



const port = process.env.PORT || 3000



app.listen(3000, () => {
    console.log(`Port is running on ${port}`);
})