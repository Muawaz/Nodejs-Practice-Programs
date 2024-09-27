const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5, 6]);
});

// PORT
const port = process.env.PORT || 3000;
// Windows PowerShell : $env:PORT=5000

app.listen(3000, () => console.log(`listening on http://localhost:${port}`));