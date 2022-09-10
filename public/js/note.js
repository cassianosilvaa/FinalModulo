const inputText = document.getElementById("iptText");
const inputDetail = document.getElementById("iptDetail");
const forms = document.getElementById("forms");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addNewNote();
});

function addNewNote() {
    let note = {
        description: null,
        detail: null,
        actionEdit: null,
        actionRemove: null,
    };

    note.description = inputText.value;
    note.detail = inputDetail.value;

    //validação para preencher o campo
    if (note.description == null || note.detail == " ") {
        alert("Por favor, informe o seu recado");

        //focar o input de descrição
        inputText.focus();
        return;
    }

    const newLine = createNewLine(note);
    forms.appendChild(newLine);
}
function createNewLine(note) {
    const notes = document.getElementsByClassName("note-item");
    const id = notes.length + 1;

    const elementTR = document.createElement("tr");
    elementTR.classList = ["note-item"];
    elementTR.id = `note-${id}`;

    //bloco info id
    const elementTdId = document.createElement("td");
    elementTdId.innerText = id;
    elementTR.appendChild(elementTdId);

    //bloco info dsc
    const elementTdText = document.createElement("td");
    elementTdText.innerText = note.description;
    elementTR.appendChild(elementTdText);

    //bloco info dtl
    const elementDetail = document.createElement("td");
    elementDetail.innerText = note.detail;
    elementTR.appendChild(elementDetail);

    // //bloco ações
    const elementActions = document.createElement("td");
    elementActions.innerText = note.actionEdit;
    elementTR.appendChild(elementActions);

    //bloco remover linha
    const btnRemove = document.createElement("button");
    btnRemove.innerText = "Excluir";
    // btnRemove.onclick = removeLine;
    btnRemove.id = `delete-item-${id}`;
    elementActions.appendChild(btnRemove);

    //bloco editar linha
    const btnEdit = document.createElement("button");
    btnEdit.innerText = "Editar";
    btnEdit.id = `edit-item-${id}`;
    elementActions.appendChild(btnEdit);

    return elementTR;
}
