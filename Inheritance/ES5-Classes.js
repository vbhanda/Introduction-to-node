class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet () {
        console.log(this.firstName + ' said hello!');
    }
    convertToString () {
        var stringVal = this.firstName + ' ' + this.lastName;
        return stringVal;
    };
}

class Employee extends Person {
    constructor(firstName, lastName, empId) {
        super(firstName, lastName);
        this.empId = empId;
    }

    getEmp () {
        console.log(this.convertToString() + ' ' + this.empId);
    }
}

var emp = new Employee('John', 'Doe', 'ABC-123');
emp.getEmp();