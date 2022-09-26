// // let logged = sessionStorage.getItem("logged");
const checkSession = sessionStorage.getItem("logged");
const checkSession2 = localStorage.getItem("logged");

checkLogged();

////////////////////// LOGAR NO SISTEMA
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    /////////////////////// PEGANDO OS IDS E JOGANDO DENTRO DAS CONTS
    const iptEmailLogin = document.getElementById("iptEmail").value;
    const iptPasswordLogin = document.getElementById("iptPassword").value;
    const session = document.getElementById("checkSession").checked;
    const account = getAccount(iptEmailLogin);

    ///////////////////// se nao tem conta faz algo

    if (!account) {
        alert("Email ou senha incorreto!");
        return;
    }
    if (account) {
        if (account.password !== iptPasswordLogin) {
            alert("Email ou senha incorreto!");
            return;
        }
        //////////////// SALVAR NO SESSIONSTORAGE
        // saveSession(iptEmailLogin, session);
        if (session) localStorage.setItem("logged", iptEmailLogin);

        sessionStorage.setItem("logged", iptEmailLogin); /////////// session >>> checkSession
        window.location.href = "note.html";
        console.log(users);
    }
});

/////////// MNATER LOGADO QUEM ESTIVER NA SEÇÃO
function checkLogged() {
    if (checkSession) {
        // sessionStorage.setItem("logged", checkSession); /////////// session >>> checkSession
        // logged = checkSession;
        window.location.href = "note.html";
    } else if (checkSession2) {
        window.location.href = "note.html";
    } else {
        return;
    }

}

///////////////////// PEGANDO CONTA

function getAccount(key) {
    const account = localStorage.getItem(key);
    ////////////////// se tiver conta vai pegar, senão vai retornar vazio
    if (account) {
        return JSON.parse(account);
    }
    return "";
}

// logout
// function => event click - excluir localStorage com a key logged e a session com a key
// e window para redirecionar /login
