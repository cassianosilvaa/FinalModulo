const checkSession = sessionStorage.getItem("logged");
const checkSession2 = localStorage.getItem("logged");

checkLogged();

document
    .getElementById("createAccount")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const iptEmail = document.getElementById("ipt-create-email").value;
        const iptPassword = document.getElementById(
            "ipt-create-password"
        ).value;
        const iptConfirmPassword =
            document.getElementById("iptConfirmPassword").value;

        if (iptEmail.length < 5) {
            alert("O Email precisa ter no mínimo 5 caracteres");
            return;
        } else if (iptPassword.length <= 7) {
            alert("A senha precisa ter no mínimo 8 caracteres");
            return;
        } else if (iptPassword !== iptConfirmPassword) {
            alert("Senhas não correspondem");
            return;
        }

        if (localStorage.getItem(iptEmail)) {
            alert("Email já em uso!");
            return;
        } else {
            let newUser = {
                login: iptEmail,
                password: iptPassword,
                onlyNoteUser: [],
            };
            saveAccount(newUser);
            alert("Conta criada com sucesso!");
            alert('Redirecionando para a aba "Login"!');
            location.assign("index.html");
        }
    });

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function checkLogged() {
    if (checkSession) {
        window.location.href = "note.html";
    } else if (checkSession2) {
        window.location.href = "note.html";
    } else {
        return;
    }
}
