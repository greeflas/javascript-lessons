var image = document.getElementById('image');
var config = JSON.parse(image.getAttribute('data-config'));

image.width = config.width;
image.height = config.height;

var cat = {
    name: "Marsyk",
    age: 2.5
};

console.log(JSON.stringify(cat));
