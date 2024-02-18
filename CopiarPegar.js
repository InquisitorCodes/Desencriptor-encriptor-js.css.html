document.addEventListener("DOMContentLoaded", function() {

   document.getElementById("btn-copy").addEventListener("click", function() {
      let textoACopiarMsg = document.getElementById("msg").value;
      copiarTextoAlPortapapeles(textoACopiarMsg);
      
  });

    document.getElementById("btn-copy2").addEventListener("click", function() {
      let textoACopiarInput = document.getElementById("input-txt").value; // Obtener el texto de la segunda textarea
      copiarTextoAlPortapapeles(textoACopiarInput);
  });

  function copiarTextoAlPortapapeles(texto) {
      var elementoTemp = document.createElement("textarea");
      elementoTemp.value = texto;
      document.body.appendChild(elementoTemp);
      elementoTemp.select();
      document.execCommand("copy");
      document.body.removeChild(elementoTemp);
  }

});