const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on("messageRecu", function(eventArgument){
    console.log(eventArgument);
}),

console.log("apres la déf de l'enevnt lister mais avent l'emmision de l'event ")

emitter.emit("messageRecu", "ceci est string");
emitter.emit("messageRecu", {id:1, message:"hey ca va "});
