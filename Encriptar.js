function sustituirTexto(texto, sustituciones) {
    for (let sustitucion of sustituciones) {
        texto = texto.replace(new RegExp(sustitucion[0], 'gi'), sustitucion[1]);
    }
    return texto;
}

function encriptar(event) {
    event.preventDefault();
    let inputText = document.getElementById("input-txt").value;
    let sustituciones = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    let textoCifrado = sustituirTexto(inputText, sustituciones);
    document.getElementById("input-txt").value = textoCifrado;
}

let botonEncriptar = document.getElementById("btn-encript");
botonEncriptar.addEventListener("click", encriptar);

function desencriptar(event) {
    event.preventDefault();
    let inputText = document.getElementById("msg").value;
    let sustituciones = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
    let textoDescifrado = sustituirTexto(inputText, sustituciones);
    if (textoDescifrado !== inputText) {
        document.getElementById("msg").value = textoDescifrado;
    } else {
        let msgText = document.getElementById("msg").value;
        textoDescifrado = sustituirTexto(msgText, sustituciones);
        document.getElementById("msg").value = textoDescifrado;
    }
}

let botonDesencriptar = document.getElementById("btn-desencript");
botonDesencriptar.addEventListener("click", desencriptar);
