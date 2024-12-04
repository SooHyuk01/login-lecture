"use strict";

const path = require("path");

const express = require("express");
const app = express();

const home = require("./routes/home/index");

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;