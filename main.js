var mySkills = {
    "Python": 50/100,
    "Java": 30/100,
    "HTML": 40/100,
    "CSS": 30/100,
    "JavaScript": 5/10,
}






















document.getElementById("navbar-links-toHome").addEventListener("click", function(){alert("x");});



document.getElementsByClassName("next").addEventListener("click", function(){alert("y");});



document.getElementsByClassName("prev").addEventListener("click", cambiarSlides(-1));
document.getElementsByClassName("next").addEventListener("click", cambiarSlides(1));



var indiceSlideshow = 1;
mostrar(indicesSlideshow);


function mostrar(indice){
    var fotos = document.getElementsByClassName("carouselImages");
    var x;
    
    if (indice > fotos.length){
        indicesSlideshow = 1; /*esto significa que dio la vuelta completa*/
    }
    if (indice < 1) {
        indiceSlideshow = fotos.length; /*esto significa que dio la vuelta pero al revés*/
    }
    for (x=0; x < fotos.length; x++){
        fotos[x].style.display = "none";
    }

    fotos[indiceSlideshow -1].style.display = "block";
    
    
}


function slideActual(indice){
    mostrar(indiceSlideshow = indice)
}

function cambiarSlides(indice){
    mostrar(indiceSlideshow += indice)
}