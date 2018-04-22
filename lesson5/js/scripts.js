// array methods

// array to string
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.toString());
console.log(fruits.join('; '));

// pop/push
console.log(fruits);
console.log(fruits.pop()); // shift() - from start
console.log(fruits);

console.log(fruits.push('Kiwi')); // unshift() - to the start
console.log(fruits);

// remove from array
delete fruits[1];
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

// concat
var arr1 = ['one', 'two', 'three'];
console.log(arr1.concat(['four', 'five',' six']));

// slice
console.log(fruits);
console.log(fruits.slice(1, 2));

// sorting
var numbers = [];

for (var i = 0; i < 10; i++) {
    numbers.push(rand(1, 100));
}

console.log(numbers);
numbers.sort();
console.log(numbers);
console.log(numbers.reverse());
