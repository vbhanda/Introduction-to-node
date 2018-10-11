var fs = require('fs');

console.log('============================ Beginning ============================');

fs.readFile(__dirname + '/sample.txt', {encoding: 'utf-8'}, function (err, data) {
    console.log(data);
});

console.log('============================ Ending ============================');