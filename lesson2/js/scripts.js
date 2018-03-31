// if-else
var username = prompt('Input your username', '');

if (username == 'admin') {
    alert('Welcome to the admin panel!');
} else {
    alert('Access to the admin panel is denied!');
}

// switch
var a = prompt('Input a', 0);
var op = prompt('Input operation', '+');
var b = prompt('Input b', 0);
var result;

switch (op) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        result = a / b;
        break;
}

alert('Result: ' + result);

// for
for (var i = 0; i < 10; i++) {
    console.log(i + 1);
}

// while
while (prompt('Input your age', 1) >= 18) {
    alert('+18 content');
}

// do-while

var bankAccount = 1000;
var price;

do {
    price = Math.random() * (bankAccount - 1) + 1;
    price = Math.floor(price); // round number

    bankAccount -= price;
    alert('You bought product for $' + price);
} while (bankAccount > 0);

alert('Your balance is: $' + bankAccount);

// break, continue
