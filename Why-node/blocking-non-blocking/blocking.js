var fs = require('fs');


console.log('============================ Beginning ============================');

var data = fs.readFileSync(__dirname + '/sample.txt', {encoding: 'utf-8'});

console.log(data);

console.log('============================ Ending ============================');