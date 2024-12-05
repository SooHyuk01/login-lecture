"use strict";

class UserStorage {
    static #users = {
        id : ["김", "나", "박", "이"],
        pw : ["1234", "1234", "1234!", "12 34"],
        age : [22,10,24,36],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };
}

module.exports = UserStorage;