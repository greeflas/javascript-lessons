// sting methods

// length
function getStr() {
    return 'qwerty';
}

var str = 'Hello';
console.log('Str length is ' + str.length);
console.log('Str length is '.length);
console.log(getStr().length);

// index of
var sentence = 'This is test string';
var index = sentence.indexOf('test'); // lastIndexOf()
console.log('Index of "test" substring is ' + index);

// slice
var substr = sentence.slice(index, sentence.lastIndexOf(' '));
console.log(substr);

// replace
console.log(sentence.replace('test', 'amazing'));

// upper/lower cases
console.log(sentence);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// concat
var start = 'Hello';
var finished = start.concat(' to ', 'Google Chrome', ' console');
console.log(finished);

// split
var url = 'https://example.com/blog/article/2018/new';
var urlParts = url.split('/');
console.log(urlParts);
