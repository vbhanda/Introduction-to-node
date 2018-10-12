var fs = require('fs');

console.log('\n============================ Beginning ============================\n');

fs.readFile(__dirname + '/sample.txt', {encoding: 'utf-8'}, function (err, data) {
    console.log(data);
});

console.log('\n============================ Ending ============================\n');