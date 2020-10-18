








var indiceActual = 1;
mostrar(indiceActual);


function cambiarFoto(indice) {mostrar(indiceActual += indice);}


function fotoActual(indice) {mostrar(indiceActual = indice);}

function mostrar(indice) {
  var fotos = document.getElementsByClassName("carouselImages");
  var dots = document.getElementsByClassName("dot");
  var x = 0;
  if (indice > fotos.length) {indiceActual = 1}
  if (indice < 1) {indiceActual = fotos.length}
  for (x = 0; x < fotos.length; x++) {
      fotos[x].style.display = "none";
  }
  for (x = 0; x < dots.length; x++) {
      dots[x].className = dots[x].className.replace(" active", "");
  }
  fotos[indiceActual-1].style.display = "block";
  dots[indiceActual-1].className += " active";
}