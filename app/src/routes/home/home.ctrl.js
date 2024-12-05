"use strict";

const users = {
    id : ["김", "나", "박", "이"],
    pw : ["1234", "1234", "1234!", "12 34"],
};

const output = {
    hello : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        pw = req.body.pw;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "failed login",
        });
    }
};

module.exports = {
    output,
    process,
};
