// objects

var person = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'vasya@example.com',

    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName());
person.firstName = 'Vasya';
console.log(person.fullName());

function createUser(name, email, phone) {
    return {
        firstName: name,
        email: email,
        phone: phone,

        getInitials: function () {
            return this.firstName.charAt(0).toUpperCase() + '.';
        }
    };
}

var user1 = createUser('vasya', 'vasya@example.com', 333);
console.log(user1.getInitials());
console.log(user1['firstName']);    

var user2 = createUser('Peter', 'p@example.com', 444);
console.log(user2.getInitials());
console.log(user2.email);
console.dir(user2);

var car = {
    mark: 'Chevrolette',
    color: 'silver',
    sits: 4
};
console.log(car);

var introvertCar = copyObject(car);
introvertCar.sits = 1;
console.log(introvertCar);
