
const log = require('./logger')

const Logger = require('./logger')
const logger = new Logger()

// Regiser a listner
logger.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
    
})

logger.log('message')