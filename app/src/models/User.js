"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        // const { id, pw } = userStorage.getUsers("id", "pw");
        const { id, pw } = UserStorage.getUserInfo(this.body.id);
        if(id) {
            if(id === this.body.id && pw === this.body.pw) {
                return { success : true };
            }
            return { success : false, msg : "incorrcect pw"};
        }
        return { success : false, msg : "id is not exist"};
    }
}

module.exports = User;