// querySelectorAll() - returns array of elements by selector
// querySelector() - returns first found element by selector

function check() {
    var linksInFooter = document.querySelectorAll('footer > a[href=""]');

    for (var i = 0; i < linksInFooter.length; i++) {
        var link = linksInFooter[i];

        link.style.backgroundColor = 'red';
        link.style.color = 'white';
    }
}

// "function () {}" - it's anonymous function, we won't use it again
// that's why we don't take it out from "doc.getEl...line"
document.getElementById('js-check-btn').addEventListener('click', function () {
    var field = document.getElementById('js-link-field');
    var link = field.value;

    if (link.length === 0) {
        alert('Please provide with a link!');

        return;
    }

    if (link.indexOf('http') !== -1 && link.indexOf('https') === -1) {
        alert('Link is not secure! http protocol is used.');
        field.value = link.replace('http', 'https');
    } else if (link.indexOf('https') === -1) {
        alert('Link is not secure! Protocol is missing.');
        field.value = 'https://' + field.value;
    } else {
        alert('Link is secure :)');
    }
});
