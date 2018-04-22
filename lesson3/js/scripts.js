// function declaration

function hello() {
    console.log('Hello!');
}

function sayHelloTo(name) {
    if (name === undefined) {
        name = 'Guest';
    }

    console.log('Hello, ' + name);
}

function calc(a, b) {
    // parseFloat()/parseInt() converts string to float/integer
    return parseFloat(a) + parseFloat(b);
}

function printRange(min, max) {
    console.log(min);

    if (min === max) {
        return;
    }

    min++;
    printRange(min, max);
}

printRange(1, 10);

hello();
sayHelloTo('World');
sayHelloTo('Earth');

var result = calc('2.6', 5);
console.log(result);

// function expression

var concat = function (str1, str2) {
    return str1 + str2;
};

var sentence = concat('Hello, ', 'World!');
console.log(sentence);
