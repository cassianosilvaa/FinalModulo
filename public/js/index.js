//////////////////////CRIAR CONTA
document
    .getElementById("createAccount")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        /////////////////////// USANDO O PREVENTDEFAULT PARA CANCELAR A AÇÃO PADRAO DO SUBMIT

        /////////////////////// PEGANDO OS IDS E JOGANDO DENTRO DAS CONTS

        const iptEmail = document.getElementById("ipt-create-email").value;
        const iptPassword = document.getElementById(
            "ipt-create-password"
        ).value;
        const iptConfirmPassword =
            document.getElementById("iptConfirmPassword").value;

        /////////////////////// VALIDAÇãO BÁSICA DE EMAIL E SENHA
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
        // const found = .find(element => element > 10);
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
            alert("Conta criada com sucesso");
            alert('Redirecionando para a aba "Login"');
            location.assign("./index.html");
        }
    });
function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}
