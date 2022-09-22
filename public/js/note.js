const checkSession = sessionStorage.getItem("logged");
const checkSession2 = localStorage.getItem("logged");

let userLocal = JSON.parse(localStorage.getItem(checkSession2));
let userSession = JSON.parse(localStorage.getItem(checkSession));

let userData;

if (userLocal) {
    userData = JSON.parse(localStorage.getItem(checkSession2));
} else {
    userData = JSON.parse(localStorage.getItem(checkSession));
}

checkLoggedNote();

function checkLoggedNote() {
    if (!checkSession) {
        if (!checkSession2) {
            window.location.href = "index.html";
        }
    }
}
createTable();

function createTable() {
    console.log(userData.onlyNoteUser);
    console.log(userData.onlyNoteUser);
    console.log(userData);

    let newRecado = {
        dsc: "teste",
        dtl: "teste2",
    };
    let newRecado2 = {
        dsc: "teseqweqwete",
        dtl: "testedwqqwdqw2",
    };
    let newRecado3 = {
        dsc: "teseqweqwete",
        dtl: "testedwqqwweqwqeweqwedqw2",
    };
    userData.onlyNoteUser.unshift(newRecado);
    userData.onlyNoteUser.unshift(newRecado2);
    userData.onlyNoteUser.unshift(newRecado3);
    localStorage.setItem("userData.login", JSON.stringify(userData));
}
