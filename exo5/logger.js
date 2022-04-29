const Logger = require('./emitter');
const logger = new Logger();


logger.on("messageRecu", function(payload){
    console.log("Message Recu : payload =>", payload)
})


module.exports = logger;
