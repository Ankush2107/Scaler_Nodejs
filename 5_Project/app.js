const express = require('express')

const app = express()

app.use(express.json())


const categories = [
    {id: 1, name: 'Web development'},
    {id: 2, name: 'Mobile development'},
    {id: 3, name: 'Photography'}
]


app.get('/api/categories', (req, res) => {
    res.send(categories)
});



app.post('/api/categories', (req, res) => {


    const category = {
        id: categories.length + 1,
        name: req.body.name
    };

    categories.push(category)
    res.send(category)
})


app.put('/api/categories/:id', (req, res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('The category for the given id was not found')

    category.name = req.body.name
    res.send(category)
})



app.delete('/api/categories/:id', (req, res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('The category for the given id was not found')

    const index = categories.indexOf(category)
    categories.splice(index, 1)
    res.send(category)
})


app.get('/api/categories/:id', (req, res) => {

    const category = categories.find(c => c.id === parseInt(req.params.id))
    if(!category) return res.status(404).send('The category for the given id was not found')

    res.send(category)
})


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listning on Port ${port}......`);
})