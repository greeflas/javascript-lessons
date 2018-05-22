var map = {
    'q': 'й',
    'w': 'ц',
    'e': 'у',
    'r': 'к',
    't': 'е',
    'y': 'н',
    'u': 'г',
    'i': 'ш',
    'o': 'щ',
    'p': 'з',
    'a': 'ф',
    's': 'ы',
    'd': 'в',
    'f': 'а',
    'g': 'п',
    'h': 'р',
    'j': 'о',
    'k': 'л',
    'l': 'д',
    'z': 'ж',
    'x': 'я',
    'c': 'ч',
    'v': 'м',
    'b': 'и',
    'n': 'т',
    'm': 'ь',
    '[': 'х',
    ']': 'ъ',
    ';': 'ж',
    '\'': 'э',
    ',': 'б',
    '.': 'ю'
};

var text = document.getElementById('text');

document.getElementById('check').addEventListener('click', function () {
    var wrongText = text.value;
    var rightText = '';

    for (var i = 0; i < wrongText.length; i++) {
        var char = wrongText[i];

        // rightText += (map[char] === undefined) ? char : map[char];

        if (map[char] === undefined) {
            rightText += char;
        } else {
            rightText += map[char];
        }
    }

    text.value = rightText;
});
