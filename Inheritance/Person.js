function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function () {
        console.log(this.firstName + ' said hello!');
    }
}

/*
Prototype: In JS, every object has a hidden object, called as prototype object
*/

Person.prototype.convertToString = function() {
    var stringVal = this.firstName + ' ' + this.lastName;
    return stringVal;
};

module.exports = Person;