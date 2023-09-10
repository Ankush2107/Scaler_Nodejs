const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/testDatabase")
.then(() => console.log('Connection is successful'))
.catch(err => console.error("could not connect to mongodb,", err))


// Schema
const courseSchema = new mongoose.Schema({

    name: String,
    creator: String,
    publishedDate: {type: Date, default: Date.now}, 
    isPublished: Boolean,
    rating: Number

})

// Model
const Course = mongoose.model('Course', courseSchema)

async function createCourse() {

    const course = new Course({

        name: 'C++',
        creator: 'Sanket sir', 
        isPublished: true,
        rating: 4.9
    
    })
    
    const result = await course.save()
    console.log(result);
}


// Rating 0 to 5

// createCourse()

// eq (equal)
// gt (greater than)
// gte (greater than and equal to)
// lt  (less than)
// lte (less than and equal to)


// in
// not in

async function getCourses() {

    const courses = await Course.find({rating: {$in: [4.5, 4.9]}}).select({name: 1, publishedDate: 1}).sort({name: 1})
    console.log(courses);
}

getCourses()
