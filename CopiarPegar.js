document.addEventListener("DOMContentLoaded", function() {
    let botonCopy = document.getElementById("btn-copy");
    botonCopy.addEventListener("click", copiarTexto);
});

function copiarTexto() {
    let textoEncriptado = document.getElementById("msg").value;
    // Utilizar la API de clipboard para copiar el texto
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            // Éxito al copiar
            alert("Texto copiado: " + textoEncriptado);
        })
        .catch(err => {
            // Manejar errores
            console.error('Error al copiar el texto al portapapeles: ', err);
        });
}