const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json())

require('dotenv').config()
const port = process.env.PORT || 5000
const genres = [
    { id: 1, name: 'action' },
    { id: 2, name: 'horror' },
    { id: 3, name: 'comedy' },
]
app.get('/', (req, res) => {
    res.send('Hello World !')
});

app.get('/api/genres', (req, res) => {
    res.send(genres)
});

app.post('/api/genres', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    const { error } = Joi.object(schema).validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    return res.send(genre)
});

app.put('/api/genre/:id', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    const { error } = Joi.object(schema).validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = genres.find(g => g.id === parseInt(req.params.id))
    genre.name = req.body.name
    res.send(genre)
});

app.delete('/api/genre/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    const index = genres.indexOf(genre);

    genres.splice(index, 1)
    return res.send(genre)

});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);

});
