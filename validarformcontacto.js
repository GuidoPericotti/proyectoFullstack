
function validar() {
    let x = document.forms["formulario"]["nombre"]["apellido"].value;
    if (x == "") {
      alert("Falta rellenar algún campo");
      return false;
    }
  }