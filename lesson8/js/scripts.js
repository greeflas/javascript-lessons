// creates user object
function createUser(firstN, lastN, a) {
    return {
        firstName: firstN,
        lastName: lastN,
        age: a
    };
}

// creates user storage
function userStorage() {
    return {
        users: [],

        addUser: function (user) {
            this.users.push(user);
        },

        addUsers: function (usersList) {
            for(var i = 0; i < usersList.length; i++){
                // take one element from "usersList"
                // call addUser() method and pass element there
                // and then addUser() method pass this element to this.users property
                this.addUser(usersList[i]);
            }
        },

        showAllUsers: function () {
            for(var i = 0; i < this.users.length; i++){
                console.log(this.users[i]);
            }

        },

        clearStorage: function () {
            this.users = [];
        }
    }
}

/* users */

// create storage object and save to storage variable
var storage = userStorage();

// create user object and save to user1 variable
var user1 = createUser("John", "Doe", 19);
// create user object and save to user2 variable
var user2 = createUser("Nadia", "Kim", 56);
// create array with user objects
var users = [
    createUser("user 1", "user 1", 43),
    createUser("user 2", "user 2", 58)
];

// add user object from variable user1 to storage
storage.addUser(user1);
storage.addUser(user2);
storage.addUsers(users);

storage.showAllUsers();

storage.clearStorage();
storage.showAllUsers();

/* managers */
var managers = userStorage();

console.log('Managers');
managers.addUser({firstName: 'Vasya'});
managers.addUser({firstName: 'Vova'});
managers.addUser({firstName: 'Petya'});
managers.showAllUsers();

/* developers */
var developers = userStorage();

console.log('Developers');
developers.addUser({nickname: 'greeflas'});
developers.showAllUsers();
