var Person = require('./Person');

function Employee(firstName, lastName, empId) {
    Person.call(this, firstName, lastName);
    this.empId = empId;
    this.getEmp = function () {
        console.log(this.convertToString() + ' ' + this.empId);
    }
}

Employee.prototype = Object.create(Person.prototype);

/*
In javascript we could invoke a function in 3 ways:
1. func()
2. func.call(this, firstnmae, lastname) ---> it takes 'this' as first parameter followed by arguments
3. func.apply(this, [firstnmae, lastname]) --> it takes 'this' as first parameter and [] or arguments
 */

var vipul = new Employee('Vipul', 'Bhandare', 'WDA-04665');
vipul.getEmp();