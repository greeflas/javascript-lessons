function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function copyObject(object) {
    var copy = {};

    for (var key in object) {
        copy[key] = object[key];
    }

    return copy;
}
