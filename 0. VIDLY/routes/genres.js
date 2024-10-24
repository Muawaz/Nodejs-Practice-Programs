const Joi = require('joi');
const express = require('express')
const router = express.Router()

const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Comedy' },
]


router.get('/', (req, res) => {
    res.send(genres)
});

router.post('/', (req, res) => {
    const { error } = validateGenre(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    return res.send(genre)
});

router.put('/:id', (req, res) => {
    const { error } = validateGenre(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const genre = genres.find(g => g.id === parseInt(req.params.id))
    genre.name = req.body.name
    res.send(genre)
});

router.delete('/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    const index = genres.indexOf(genre);

    genres.splice(index, 1)
    return res.send(genre)

});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required(),
    }
    return Joi.object(schema).validate(genre);
}

module.exports = router