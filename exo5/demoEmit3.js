const EventEmitter = require('events');
const emitter = new EventEmitter;

// Pour pas faire ca ?

const logArgs = function(eventArgement){
    console.log(eventArgement)
}

logArgs("string")
logArgs({id:1, message:"text"})