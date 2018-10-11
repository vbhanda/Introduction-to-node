var obj = {
    first: 'John',
    lastName: 'Doe'
};

console.log(obj.first); // Using . notation

console.log(obj['first']); // Using [] notation

var prop = 'lastName';

console.log(obj[prop]); //using a variable instead to dynamically acces object properties


// =========== First class function:========

var arr = [];

arr.push(1);
arr.push('something');
arr.push(function () {
   console.log('from function');
});


function someFunc(val) {
    val();
}

someFunc(function () {
    console.log('function as parameter');
});
