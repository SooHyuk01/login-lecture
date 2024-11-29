// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.end(`This is ${req.url} Page`);
// });
// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended : true, }));


const home = require("./src/routes/home");
app.use("/", home); // use() : Method to Register MiddleWare

module.exports = app;