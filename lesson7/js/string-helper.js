function getStringHelper(string)
{
    return {
        text: string,

        getInitials: function () {
            return this.text.charAt(0).toUpperCase() + ".";
        },

        toSnakeCase: function () {
            return this.text.replace(/ /g, "_").toLocaleLowerCase();
        },

        wordsCount: function () {
            var words = this.text.split(" ");
            return words.length;
        },

        lettersCount : function () {
            return this.text.length;
        },

        toCamelCase: function () {
            var arr = this.text.split(" ");
            var str = "";

            for (var i = 0; i < arr.length; i++) {
                var letter = arr[i].charAt(0).toUpperCase();
                str += letter + arr[i].slice(1);

            }

            str = str.replace(/\.|,|!|;|\?|-|_/g, "");

            return str.charAt(0).toLowerCase() + str.slice(1);

        }
    };
}

// example 1
console.log(getStringHelper("Thi is_some; string.? And, this - is smth!").toCamelCase());

// example 2
var myString = getStringHelper('This is some string');

console.log(myString.getInitials());
console.log(myString.toSnakeCase());
console.log(myString.wordsCount());
console.log(myString.lettersCount());
console.log(myString.toCamelCase());
