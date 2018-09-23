var BACKSPACE_KEY_CODE = 8;

var ccField = document.getElementById('cc');
var ccResetBtn = document.getElementById('cc-reset');

ccField.addEventListener('keydown', function (e) {
    var number = e.currentTarget.value;
    var length = number.length;


    if (e.keyCode === BACKSPACE_KEY_CODE) {
        var cursorPosition = e.currentTarget.selectionStart;

        if (number.charAt(cursorPosition - 1) === ' ') {
            e.preventDefault();

            return;
        }
    }

    if (e.keyCode !== BACKSPACE_KEY_CODE) {
        if (length === 4 || length === 9 || length === 14) {
            e.currentTarget.value += ' ';
        }
    }
});

ccResetBtn.addEventListener('click', function () {
    ccField.value = '';
    ccField.focus();
});
