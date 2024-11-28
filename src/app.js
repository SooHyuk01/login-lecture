// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.end(`This is ${req.url} Page`);
// });
// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home); // use() : Method to Register MiddleWare

module.exports = app;