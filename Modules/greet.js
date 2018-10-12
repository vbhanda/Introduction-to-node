var English = require('./English');

function Greet(message) {
    console.log(message);
}

// Greet();

//todo: have dynamic Greet() which can log messages in different languages
/*
Greet(Spanish) --> 'Hola'
Greet(English) --> 'Hello'
Greet(Hindi) --> 'Namaste'
*/

Greet(English.hi);