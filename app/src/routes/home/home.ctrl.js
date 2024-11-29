"use strict";

const User = require("../../models/User");

const output = {
    rootController : (req, res) => {
        res.render("home/index");
    },
    loginController : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    }
}
const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    //     const id = req.body.id;
    //     const pw = req.body.pw;
    // const users = UserStorage.getUsers("id", "pw");
    // const response = {};
    // if(users.id.includes(id)) {
    //     const idx = users.id.indexOf(id);
    //     if(users.pw[idx] === pw) {
    //         response.success = true;
    //         return res.json(response);
    //     }
    // }
    
    // response.success = false;
    // response.msg = "failed login";
    // return res.json(response);
    }
}
module.exports = {
    output,
    process,
};