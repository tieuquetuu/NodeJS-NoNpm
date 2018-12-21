/**
 *  Library that demonstrates something throwing when its init() is called
 *
 *
 */

var example = {};

example.init = function() {
    // This is an error created intentionally ( bar is not defined )
    var foo = bar;
};



// Export the module
module.exports = example;