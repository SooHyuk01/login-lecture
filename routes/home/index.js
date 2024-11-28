"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./home.ctrl");

router.get('/', controller.rootController);

router.get('/login', controller.loginController);

module.exports = router;