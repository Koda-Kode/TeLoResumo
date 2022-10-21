// Mostrar el desplegable de los cursos


// Desplegar cada curso
function cursos(curso) {
  var x = document.getElementById(curso);
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

