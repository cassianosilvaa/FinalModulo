const formNotes = document.querySelector("#recados");
const tableNote = document.querySelector("#forms");
let userData;

recuperaLocal();

formNotes.addEventListener("submit", saveNote);

function saveNote(event) {
    event.preventDefault();

    const d = new Date();
    let id = d.getTime();

    const iptDsc = formNotes.iptText.value;
    const iptDetail = formNotes.iptDetail.value;

    if (iptDsc == null || iptDsc == "") {
        alert("Preencha os campos");
    } else if (iptDetail == null || iptDetail == "") {
        alert("Preencha os campos");
    } else {
        let objNote = {
            id: id,
            description: iptDsc,
            detail: iptDetail,
        };
        userData.onlyNoteUser.push(objNote);
        saveUser();
        createTable();
        alert("Recado salvo com sucesso");
        event.target.reset();
    }
}

// RECUPERA TUDO
function recuperaLocal() {
    const checkSession = sessionStorage.getItem("logged");
    const checkSession2 = localStorage.getItem("logged");

    let userLocal = JSON.parse(localStorage.getItem(checkSession2));

    if (userLocal) {
        userData = JSON.parse(localStorage.getItem(checkSession2));
    } else {
        userData = JSON.parse(localStorage.getItem(checkSession));
    }
}

function createTable() {
    tableNote.innerHTML = "";
    for (let note of userData.onlyNoteUser) {
        tableNote.innerHTML += `
        <tr>
            <th scope="row">${note.id}</th>
            <td>${note.description}</td>
            <td>${note.detail}</td>
            <td>
                <input type="button" class="btn btn-light" value="Excluir" onclick="removerProduto(${userData.onlyNoteUser.id})">
                <input type="button" class="btn btn-light" value="Editar" onclick="removerProduto(${userData.onlyNoteUser.id})">
            </td>
        </tr>
    `;
    }
}

/* <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
       // <td>
            //     <img type="button" width="40" src="./img/delet.svg" onclick="removerProduto(${userData.onlyNoteUser.id})" />
            //     <img type="button" width="40" src="./img/delet.svg" onclick="removerProduto(${userData.onlyNoteUser.id})" />
            // </td>
</tr>; */

//validação para mandar pro login caso nao estiver com a conta acessada
checkLoggedNote();
function checkLoggedNote() {
    if (!userData) {
        window.location.href = "index.html";
    }
}
function saveUser() {
    localStorage.setItem(userData.login, JSON.stringify(userData));
}
createTable();
