"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArray, usersInfoArra) {
    var arrayUser = [];
    for (var i = 0; i < usersArray.length; i++) {
        var _a = usersArray[i], name_1 = _a.name, gender = _a.gender;
        var _b = usersInfoArra[i], position = _b.organization.position, age = _b.age;
        var objUser = {
            name: name_1,
            position: position,
            age: age,
            gender: gender
        };
        console.log(objUser);
        arrayUser.push(objUser);
    }
    return arrayUser;
}
var usersPositions = getUsersJobPositions(users_1.usersArray, userInfo_1.usersInfoArra);
console.log('userPositions', usersPositions);
