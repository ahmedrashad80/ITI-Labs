"use strict";
// create user class have name and email
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Email: ").concat(this.email);
    };
    User.prototype.updateEmail = function (newEmail) {
        this.email = newEmail;
        return "Email updated successfully to ".concat(newEmail);
    };
    return User;
}());
// create user repository class have users array and methods to add, remove, and get users
var userOne = new User("ahmed", "ahmed@gmail.com");
console.log(userOne.getDetails());
console.log(userOne.updateEmail("elsaka@gmail.com"));
