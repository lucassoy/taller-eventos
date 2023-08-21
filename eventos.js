document.addEventListener("DOMContentLoaded", function(){
var boton = document.getElementById("boton");

function mensaje(){
    alert("Hola! soy el div");
}
boton.addEventListener("click",mensaje);
});