  // Mostrar el desplegable de los cursos


  // Desplegar cada curso
function cursos(curso) {
  var desplegable = document.getElementById(curso);
    if (desplegable.style.display == "none") {
      desplegable.style.display = "block";
    } else {
      desplegable.style.display = "none";
    }
}

