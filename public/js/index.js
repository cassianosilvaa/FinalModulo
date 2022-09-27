const checkSession = sessionStorage.getItem("logged");
const checkSession2 = localStorage.getItem("logged");

checkLogged();

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const iptEmailLogin = document.getElementById("iptEmail").value;
    const iptPasswordLogin = document.getElementById("iptPassword").value;
    const session = document.getElementById("checkSession").checked;
    const account = getAccount(iptEmailLogin);

    if (!account) {
        alert("Email ou senha incorreto!");
        return;
    }
    if (account) {
        if (account.password !== iptPasswordLogin) {
            alert("Email ou senha incorreto!");
            return;
        }
        if (session) localStorage.setItem("logged", iptEmailLogin);

        sessionStorage.setItem("logged", iptEmailLogin);
        window.location.href = "note.html";
    }
});
function checkLogged() {
    if (checkSession) {
        window.location.href = "note.html";
    } else if (checkSession2) {
        window.location.href = "note.html";
    } else {
        return;
    }
}
function getAccount(key) {
    const account = localStorage.getItem(key);
    ////////////////// se tiver conta vai pegar, senão vai retornar vazio
    if (account) {
        return JSON.parse(account);
    }
    return "";
}
