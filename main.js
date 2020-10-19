var mySkills = {
    "Python": 50/100,
    "Java": 30/100,
    "HTML": 40/100,
    "CSS": 30/100,
    "JavaScript": 5/10,
}


/*links a mis socials*/
document.getElementById("linkWhatsapp").addEventListener('click',function(){ /*FUNCIONAAAAAAA :)))))))))))*/
    window.open('https://wa.me/584120229774', '_blank');
});

document.getElementById("linkTwitter").addEventListener('click',function(){
    window.open('https://twitter.com/isabelasenjoo', '_blank');
});

document.getElementById("linkInstagram").addEventListener('click',function(){
    window.open('https://t.co/OU19e2UD6N?amp=1', '_blank');
});





document.getElementById("buttonContact").addEventListener('click', function(){

    var nombre = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;

    console.log(nombre);

    if ( (nombre === "") || (email === "") || (message === "") || (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))){
        alert("Ha ingresado algún dato inválido o ha dejado un campo vacío.");

    } else{
        console.log('DATOS DEL USUARIO');
        console.log("Nombre: "+nombre);
        console.log("E-mail: "+email);
        console.log("Mensaje: "+message);
        alert("Su solicitud ha sido enviada.");

    }



    
});







var indiceActual = 1;
mostrar(indiceActual);

function mostrar(indice) {
  var fotos = document.getElementsByClassName("carouselImages");
  var x = 0;
  if (indice > fotos.length) {indiceActual = 1}
  if (indice < 1) {indiceActual = fotos.length}
  for (x = 0; x < fotos.length; x++) {
      fotos[x].style.display = "none";
  }
  fotos[indiceActual-1].style.display = "block";
}

function cambiarFoto(indice) {mostrar(indiceActual += indice);}


function fotoActual(indice) {mostrar(indiceActual = indice);}

