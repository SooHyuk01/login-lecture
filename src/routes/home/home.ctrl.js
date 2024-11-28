"use strict";

const rootController = (req, res) => {
    res.render("home/index");
};
const loginController = (req, res) => {
    res.render("home/login");
};

module.exports = {
    rootController,
    loginController,
};