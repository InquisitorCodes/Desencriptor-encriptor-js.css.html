document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btn-copy").addEventListener("click", function() {
      var textoACopiarInput = document.getElementById("input-txt").value; // Obtener el texto de la primera textarea
      var textoACopiarMsg = document.getElementById("msg").value; // Obtener el texto de la segunda textarea
      var textoACopiar = textoACopiarInput + "\n" + textoACopiarMsg; // Concatenar ambos textos

      console.log("Texto a copiar:", textoACopiar); // Agregar este mensaje para depurar
      copiarTextoAlPortapapeles(textoACopiar);
  });

  function copiarTextoAlPortapapeles(texto) {
      var elementoTemp = document.createElement("textarea");
      elementoTemp.value = texto;
      document.body.appendChild(elementoTemp);
      elementoTemp.select();
      document.execCommand("copy");
      document.body.removeChild(elementoTemp);
      console.log("Texto copiado al portapapeles:", texto); // Agregar este mensaje para depurar
  }
});