// part of "window" object
// can be reached by "window.sayHello()"
function sayHello()
{
    console.log('Hello!');
}

window.addEventListener('resize', function () {
    console.log('Width: ' + this.innerWidth);
    console.log('Height: ' + this.innerHeight);
});


function test(paramName) {
    console.log(paramName);
}

test('minPrice');