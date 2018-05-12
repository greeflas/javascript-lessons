// DOM - Document Object Model

document.write('Hello!');

var title = document.getElementById('title');
title.style.textAlign = 'center';
title.style.fontFamily = 'Arial';

var blocks = document.getElementsByClassName('black');

for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = 'black';
}

var allBlocks = document.getElementsByTagName('span');

for (var i = 0; i < allBlocks.length; i++) {
    allBlocks[i].style.border = '1px solid #ccc';
}

document.getElementsByName('username')[0].value = 'Greeflas';

var userStr = prompt("input some message");

var textarea = document.getElementById('text');

textarea.value = userStr;

textarea.style.maxHeight = "100px";
textarea.style.maxWidth = "250px";
textarea.style.minWidth = "160px";
textarea.style.minHeight = "25px";
