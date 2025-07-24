const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        console.log(message)
        this.emit('message Logged', { id: 1, irl: 'http://'})
    }
}


module.exports = Logger; 


