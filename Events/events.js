var Emitter = require('./Emitter');

var emitter = new Emitter();

emitter.on('greet', function () {
   console.log('Someone, somewhere just said Hi....');
});

emitter.on('greet', function () {
   console.log('Someone, somewhere just said Hello....');
});


emitter.emit('greet');