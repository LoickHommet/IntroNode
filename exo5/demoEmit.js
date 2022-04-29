const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on("messageRecu", function(){
    console.log('message reçu');
}),
// emitter.emit("messageRecu");
console.log("apres la déf de l'enevnt lister mais avent l'emmision de l'event ")

emitter.emit("messageRecu");