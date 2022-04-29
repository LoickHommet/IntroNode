const Logger = require('./emitter');
const logger1 = new Logger();



// define un listener à partir de mon logger ?

// define un listener à partir de mon logger?
logger1.on("messageRecu", function(payload){
    console.log("Logger 1 : payload =>", payload)
})

// define un listener à partir d'une autre objet de class Logger?

// est ce que ça marche avec d'autres instances de types eventlisten
const logger2 = new Logger();

logger2.on("messageRecu", function(payload){
    console.log("Logger 2 : payload =>", payload)
})

logger1.log("message n°1");
logger1.log("message n°2");
logger1.log("message n°3");