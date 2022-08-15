const {EventEmitter} = require('events');
// const eventEmitter = new events.EventEmitter();
const  eventEmitter = new EventEmitter();

//Create an event handler:
const cal =  () =>  console.log('event is awesome');

const numbers =  () =>  console.log(Math.floor(Math.random() * 4));

//Assign the event handler to an event:
eventEmitter.on('output', numbers);
eventEmitter.on('output', cal);
eventEmitter.emit('output');