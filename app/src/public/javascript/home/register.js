"user strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const registerButton = document.querySelector("#button");

registerButton.addEventListener("click", register);

function register() {
    const req = {
        id : id.value,
        name : name.value,
        pw : pw.value,
        confirmPw : confirmPw.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 오류 발생");
    }) 
};