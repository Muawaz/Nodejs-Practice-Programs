const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const Joi = require('joi');
const logger = require('./logger')
const authenticator = require('./authenticator')
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet())

// Configuration
console.log('Applicaiton Name : ' + config.get('name'));
console.log('Mail Server : ' + config.get('mail.host'));
console.log('Mail Password : ' + config.get('mail.password'));


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan Enabled');
    // Windows PowerShell : $env:NODE_ENV="production"
}

app.use(logger);

app.use(authenticator);

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given not found')
    res.send(course)

});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given not found')

    const { error } = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given not found')

    const index = courses.indexOf(course)
    if (index > -1) courses.splice(index, 1);

    res.send(course)
});


function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
    }
    return Joi.object(schema).validate(course);
}

// PORT
const port = process.env.PORT || 3000;
// Windows PowerShell : $env:PORT=5000

app.listen(port, () => console.log(`listening on http://localhost:${port}`));