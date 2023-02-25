"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArray, usersInfoArra) {
    let arrayUser = [];
    for (let i = 0; i < usersArray.length; i++) {
        const { name, gender } = usersArray[i];
        const { organization: { position }, age } = usersInfoArra[i];
        const objUser = {
            name: name,
            position: position,
            age: age,
            gender: gender
        };
        console.log(objUser);
        arrayUser.push(objUser);
    }
    return arrayUser;
}
const usersPositions = getUsersJobPositions(users_1.usersArray, userInfo_1.usersInfoArra);
console.log('userPositions', usersPositions);
//# sourceMappingURL=index.js.map