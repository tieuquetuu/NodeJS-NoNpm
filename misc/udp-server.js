


// Dependencies
var dgram = require('dgram');


// Create a server
var server = dgram.createSocket('udp4');


server.on('message', function (messageBuffer, sender) {
    // do something
    var messageString = messageBuffer.toString();
    console.log(messageString);
})


// Bind to 6000
server.bind(6000);