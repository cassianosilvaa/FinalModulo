const formNotes = document.querySelector("#recados");
const tableNote = document.querySelector("#forms");

const iptEditDsc = document.getElementById("iptEditDsc");
const iptEditDtl = document.getElementById("iptEditDtl");
const btnLogout = document.getElementById("btnLog");

const attLocal = (userData) => {
    localStorage.setItem(userData.login, JSON.stringify(userData));
};

let userData;
recuperaLocal();

formNotes.addEventListener("submit", saveNote);
btnLogout.addEventListener("click", logout);

function saveNote(event) {
    event.preventDefault();

    const d = new Date();
    let id = d.getTime();

    const iptDsc = formNotes.iptText.value;
    const iptDetail = formNotes.iptDetail.value;

    if (iptDsc == null || iptDsc == "") {
        alert("Preencha os campos!");
    } else if (iptDetail == null || iptDetail == "") {
        alert("Preencha os campos!");
    } else {
        let objNote = {
            id: id,
            description: iptDsc,
            detail: iptDetail,
        };
        userData.onlyNoteUser.push(objNote);
        saveUser();
        createTable();
        alert("Recado salvo com sucesso!");
        event.target.reset();
    }
}

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
    let idCount = 1;
    for (let note of userData.onlyNoteUser) {
        tableNote.innerHTML += `
        <tr>
            <th>${idCount}</th>
            <td>${note.description}</td>
            <td>${note.detail}</td>
            <td>
                <input type="button" class="btn btn-outline-dark" value="Excluir" onclick="deleteRowTable(${note.id})">
                <input type="button" class="btn btn-outline-dark" value="Editar" onclick="editNotesTable(${note.id})">
            </td>
        </tr>
    `;
        idCount++;
    }
}

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

function deleteRowTable(id) {
    if (confirm("Deseja excluir recado?")) {
        const idNotes = userData.onlyNoteUser.findIndex(
            (recado) => recado.id === id
        );
        if (idNotes < 0) return;
        userData.onlyNoteUser.splice(idNotes, 1);
        attLocal(userData);
        alert("Recado removido com sucesso!");
        createTable();
    }
}

function editNotesTable(id) {
    if (confirm("Deseja editar o campo 'Descri????o'?") == true) {
        const editNotes = userData.onlyNoteUser.findIndex(
            (recado) => recado.id === id
        );

        do {
            dsc = userData.onlyNoteUser[editNotes].description = prompt(
                `Edite a descri????o do seu recado: `
            );
        } while (!dsc);

        alert("Descri????o editada com sucesso!");
        attLocal(userData);
        createTable();
    } else {
        alert("Cancelado");
    }

    if (confirm("Deseja editar o campo 'Detalhamento'?") == true) {
        const editNotes = userData.onlyNoteUser.findIndex(
            (recado) => recado.id === id
        );

        do {
            dtl = userData.onlyNoteUser[editNotes].detail = prompt(
                `Edite o detalhe do seu recado: `
            );
        } while (!dtl);

        alert("Detalhe editado com sucesso!");
        attLocal(userData);
        createTable();
    } else {
        alert("Cancelado");
    }
}

function logout() {
    const checkSession2 = localStorage.getItem("logged");
    const checkSession = sessionStorage.getItem("logged");
    if (checkSession2 || checkSession) {
        localStorage.removeItem("logged");
        sessionStorage.removeItem("logged");
        window.location.href = "index.html";
    }
}
