/*
 * Primary file for API
 *
 */

// Dependencies
var server = require('./lib/server');
var workers = require('./lib/workers');
var cli = require('./lib/cli');
var exampleDebuggingProblem = require('./lib/exampleDebugProblem');

// Declare the app
var app = {};

// Init function
app.init = function(){

    // Start the server
    debugger;
    server.init();
    debugger;

    // Start the workers
    debugger;
    workers.init();
    debugger

    // Start the CLI, but make sure it starts last
    debugger
    setTimeout(function(){
        cli.init();
    },50);
    debugger

    // Set foo at 1
    debugger;
    var foo = 1;
    console.log('Just assigned 1 to foo');
    debugger

    // Increment foo
    debugger;
    foo++;
    console.log('Just incremented foo');
    debugger;

    // Square foo
    debugger;
    foo = foo * foo;
    console.log('Just square foo');
    debugger;

    // Convert foo to a string
    debugger;
    foo = foo.toString();
    console.log('Just converted foo to string');
    debugger;

    // Call the init script that will throw
    exampleDebuggingProblem.init();
    console.log('Just called the library');
    debugger;

};

// Self executing
app.init();


// Export the app
module.exports = app;
