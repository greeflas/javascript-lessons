// regular expressions

var str = 'This, is - some. string!? _';
str = str.replace(/,|-|!|\?|\.|_/g, '');
console.log(str);

var email = 'first.user_3255@example-865.com.ua';
var re = new RegExp(/^[a-z0-9\._]+@[a-z0-9-\.]+$/);
var isValid = re.test(email);
console.log(isValid);
