const cifrado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
let text = document.getElementById("tout");

const neg = document.getElementById("neg");
const img = document.getElementById("img");
const btnCopiar = document.getElementById("btnCopiar");

function btnEncriptar() {
    var textArea = document.getElementById("textArea").value;
    if (filtrarTexto(textArea)) {
        let text = document.getElementById("tout");
        text.textContent = encriptar(textArea);
        limpiar()
    } else {
        alert("INGRESAR CORRECTAMENTE SU TEXTO");
    }

}
function btnDesencriptar() {
    var textArea = document.getElementById("textArea").value;
    if (filtrarTexto(textArea)) {
        text.textContent = desencriptar(textArea);
        limpiar()
    } else {
        alert("INGRESAR CORRECTAMENTE SU TEXTO");
    }

}

function encriptar(textArea) {
    for (let i = 0; i < cifrado.length; i++) {
        if (textArea.includes(cifrado[i][0])) {
            textArea = textArea.replaceAll(cifrado[i][0], cifrado[i][1]);
        }
    }
    return textArea;
}
function desencriptar(textArea) {
    for (let i = 0; i < cifrado.length; i++) {
        if (textArea.includes(cifrado[i][1])) {
            textArea = textArea.replaceAll(cifrado[i][1], cifrado[i][0]);
        }
    }
    return textArea;
}

function filtrarTexto(textArea) {
    const mayusculas = textArea.match(/[A-Z]/g);
    const especiales = textArea.match(/[^a-zA-Z0-9]/g);

    if (mayusculas == null && especiales == null) {
        const minusculas = textArea.match(/[a-z]/g);
        if (minusculas == null) {
            return false;
        } else {
            return true;
        }
    }
    return false;
}
function limpiar() {
    neg.style.display = "none";
    img.style.display = "none";
    btnCopiar.style.display = "block";
}

function copiarTexto() {
    var textArea = document.getElementById("textArea");
    const tempElement = document.createElement("textarea");
    tempElement.value = text.innerText;

    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");

    document.body.removeChild(tempElement);
    textArea.value=null;
    alert("¡Contenido copiado!");

}