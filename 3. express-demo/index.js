const debug = require('debug')('app:startup')
const config = require('config')
const helmet = require('helmet')
const morgan = require('morgan')
const courses = require('./routes/courses')
const home = require('./routes/home')
const logger = require('./middleware/logger')
const authenticator = require('./middleware/authenticator')
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet())
app.use('/api/courses', courses)
app.use('/', home)

// Configuration
console.log('Applicaiton Name : ' + config.get('name'));
console.log('Mail Server : ' + config.get('mail.host'));
console.log('Mail Password : ' + config.get('mail.password'));


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    // console.log('Morgan Enabled');
    // Windows PowerShell : $env:NODE_ENV="production"
    debug('Morgan Enabled');
    // Windows PowerShell : $env:DEBUG="app:startup"
}

app.use(logger);

app.use(authenticator);

// PORT
const port = process.env.PORT || 3000;
// Windows PowerShell : $env:PORT=5000

app.listen(port, () => console.log(`listening on http://localhost:${port}`));