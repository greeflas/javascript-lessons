// variables

var num = 1; // int num = 1;
var sum = 3.5; // float sum = 3.5; double sum = 3.5;
var flag = true; // bool flag = true;
var letter = 'r'; // char letter = 'r';
var str = 'this is some string'; // char str[] = "this is some string";
var arr = [3, 'g', false, 5.6, 'string'];
var nothing = null; // NULL, nullpointer

// data types

console.log(typeof num);
console.log(typeof sum);
console.log(typeof flag);
console.log(typeof letter);
console.log(typeof str);
console.log(typeof arr);
console.log(typeof nothing);
console.log(8 / 0);
console.log('sting' - 6);

// input/output

console.log('This is some message in console.');
console.error('Something went wrong!');
console.dir(arr);

var userName = prompt('Say your name', 'Guest'); // cin
alert('Hello, ' + userName); // cout

// operators

console.log('2 + 7 = ' + (2 + 7));

var sum = 4 * 8;
console.log('4 * 8 = ' + sum);
