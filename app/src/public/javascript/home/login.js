"user strict";

const id = document.querySelector("#id"); 
const pw = document.querySelector("#pw");
const loginButton = document.querySelector("#button");

loginButton.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pw : pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 오류 발생");
    }) 
};