const inputText = document.getElementById("iptText");
const inputDetail = document.getElementById("iptDetail");
const forms = document.getElementById("forms");

function addNewNote() {
    let note = {
        description: null,
        detail: null,
    };

    note.description = inputText.value;
    note.dtl = inputDetail.value;

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
    const elementTdId = document.createElement9("td");
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

    //bloco ações
    const elementActions = document.createElement("td");

    //bloco remover linha
    const btnRemove = document.createElement("button");
    btnRemove.innerText = "Excluir";
    btnRemove.onclick = removeLine;
    btnRemove.id = `delete-item-${id}`;

    elementActions.appendChild(btnRemove);

    elementTR.appendChild(elementActions);

    return elementTR;
}
