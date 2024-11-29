"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./home.ctrl");

router.get('/', controller.output.rootController);
router.get('/login', controller.output.loginController);
router.get('/register', controller.output.register);
router.post('/login', controller.process.login);

module.exports = router;