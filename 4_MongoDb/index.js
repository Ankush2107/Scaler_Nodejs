const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/testDatabase")
.then(() => console.log('Connection is successful'))
.catch(err => console.error("could not connect to mongodb,", err))


// Schema
const courseSchema = new mongoose.Schema({

    name: {type: String, required: true, minlength: 3, maxlength: 200},
    tags: {type: Array, validate: {
        validator: function(tags) {
            return tags.length > 1
        }
    }},
    category: {
        type: String, 
        required: true,
        enum: ['DSA', 'Web', 'Mobile', 'Data Science']
    },
    creator: {type: String, required: true},
    publishedDate: {type: Date, default: Date.now}, 
    isPublished: {type: String, required: true},
    rating: {type: Number, required: function(){return this.isPublished}}

})

// Model
const Course = mongoose.model('Course', courseSchema)

async function createCourse() {

    const course = new Course({
        name: 'React', 
        tags: ['express'],
        category: 'Web', 
        creator: 'Adam',
        isPublished: true,
        rating: 3.5  
    });

    try {
        const result = await course.save()
        console.log(result);
    } catch (error) {
        for(feild in error.errors) {
            console.log(error.errors[feild]);
        }
    }
}


// Rating 0 to 5

createCourse()

// Comparison operator
// eq (equal)
// gt (greater than)
// gte (greater than and equal to)
// lt  (less than)
// lte (less than and equal to)


// in
// not in

async function getCourses() {

    const courses = await Course.find({rating: {$in: [4.5, 4]}}).select({name: 1, publishedDate: 1}).sort({name: 1}).and( [{creator: 'Mrinal'}, {rating: 4}] ,)
    console.log(courses);
}

// getCourses()


// Logical Operator
// or
// and



async function updateCourse(id) {

    let course = await Course.findById(id)

    if(!course) return;

    course.name = 'Csharp'

    course.creator = 'Steve'

    const updatedCourse = await course.save()

    console.log(updatedCourse);
}

// updateCourse('64fe01db6ffc3e7e9986a2f1')


// deleting

async function deleteCourse(id) {
    let course = await Course.findByIdAndRemove(id) 

    console.log(course);
}

// deleteCourse('64fe01db6ffc3e7e9986a2f1')