var languageChecker = document.getElementById('js-languages');

languageChecker.addEventListener('change', function (event) {
    event.stopImmediatePropagation();

    var select = event.target;
    var language = select.options[select.selectedIndex];

    console.log(language.value);
});

languageChecker.addEventListener('change', function (event) {
    console.log('[Debug] Language was changed.');
});

var coubs = document.getElementsByClassName('coube');

for(var i = 0; i < coubs.length; i++){
    coubs[i].addEventListener('click', changeColor);
}

function changeColor(event) {
    event.target.style.backgroundColor = "green";
}

document.getElementById('js-google-link').addEventListener('click', function (e) {
    e.preventDefault();

    console.log('[Debug] Clicked on Google link.');
});
