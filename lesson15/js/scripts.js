var boxes = document.getElementsByClassName('box');

for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];

    box.style.backgroundColor = box.getAttribute('data-color');
}
