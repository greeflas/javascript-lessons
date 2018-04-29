function createCat(name, hobbies, mom) {
    return {
        name: name,
        hobbies: hobbies,
        mom: mom,

        printHobbies: function () {
            return this.hobbies.join(', ');
        },
        getMomName: function () {
            return this.mom.name;
        },
        getNameWithPossessiveCase: function () {
            return this.name + "'s";
        }
    };
}

var murashka = createCat('Murashka', [
    'eat',
    'sleep',
    'hunt',
]);
console.log(murashka.getNameWithPossessiveCase() + " hobbies: " + murashka.printHobbies());

var jack = createCat('Jack', [
    'fight',
    'watch',
    'hunt',
    'eat',
]);

murashka.dad = jack;
murashka.getDadName = function() {
    return this.dad.name;
};
console.log(murashka.getNameWithPossessiveCase() + " dad is " + murashka.getDadName());

var cookie = createCat('Cookie', [
    'watch',
    'smell',
    'eat',
], murashka);

console.log(cookie.getNameWithPossessiveCase() + " hobbies: " + cookie.printHobbies());
console.log(cookie.getNameWithPossessiveCase() + " mom is " + cookie.getMomName());

for (var key in cookie.hobbies) {
    console.log(cookie.hobbies[key]);
}

for (var key in cookie) {
    if (typeof cookie[key] === 'function') {
        continue;
    }

    console.log(key + ':' + cookie[key]);
}
