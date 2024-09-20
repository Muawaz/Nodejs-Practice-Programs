
const EventEmitter = require('events')
const emitter = new EventEmitter();

// Register a Listening
emitter.on('loggin', (arg) => {
    console.log('listener called: ', arg);
    
})
var url = 'http://mylogger.io/log'

const log = (message) => {
    //  Send an http request
    console.log(message);

    // Raise an event
    emitter.emit('loggin', {data: message})
}

module.exports = log
