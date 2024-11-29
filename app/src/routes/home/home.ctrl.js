"use strict";

const users = {
    id : ["js", "nodejs", "express"],
    pw : ["1234", "1234", "123456"],
};

const output = {
    rootController : (req, res) => {
        res.render("home/index");
    },
    loginController : (req, res) => {
        res.render("home/login");
    },
}
const process = {
    login : (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                return res.json({ success : true });
            }
        }

        return res.json({
            success : false,
            msg : "failed login",
        });
    }
}
module.exports = {
    output,
    process,
};