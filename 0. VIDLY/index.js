const genres = require('./routes/genres')
const home = require('./routes/home')
const express = require('express');
const app = express();
app.use(express.json())
app.use('/api/genres', genres)
app.use('/', home)

require('dotenv').config()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);

});
