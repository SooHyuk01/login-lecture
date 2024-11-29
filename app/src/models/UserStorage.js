"use strict";

class UserStorage {
    static #users = {
        id : ["js", "nodejs", "express"],
        pw : ["1234", "1234", "123456"],
        name : ["장", "한", "변"],
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
    }
}

module.exports = UserStorage;