"user strict";

const id = document.querySelector("#id"); 
const pw = document.querySelector("#pw");
const loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pw : pw.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));
    fetch("/login", {
        body: JSON.stringify(req),
    });
};