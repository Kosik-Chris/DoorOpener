//This file is kept on the Raspberry Pi Zero's Desktop currently.
const Gpio = require('pigpio').Gpio;

const motor = new Gpio(4, {mode: Gpio.OUTPUT});

let startPosition = 900;
let endPosition = 2200;

var iteration = 0;

const execute = setInterval(() => {

 if(iteration == 1){
   clearInterval(execute);
 }

  motor.servoWrite(endPosition);
  iteration++;

},10000);
