const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5, 6]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id)
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params)
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
});

// PORT
const port = process.env.PORT || 3000;
// Windows PowerShell : $env:PORT=5000

app.listen(port, () => console.log(`listening on http://localhost:${port}`));