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
