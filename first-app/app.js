
const log = require('./logger')
const EventEmitter = require('events')
const emitter = new EventEmitter()

// Regiser a listner
emitter.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
    
})

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'})

log('this is the message')