// Array con los mensajes aleatorios
var mensajes = [
    "Te amo mucho",
    "Eres suficiente",
    "Cada día me gustas más",
    "Eres muy importante para mi",
    "Estoy muy orgullosa de ti",
    "Eres preciosa",
    "Me encantas",
    "Me haces muy feliz siempre",
    "Quisiera pasar toda mi vida a tu lado",
    "Cada día me enamoro más de ti",
    "Amo hablar contigo",
    "Amo todo de ti",
    "En días buenos o malos, siempre estaré para ti",
    "Pensar en ti es mi pasatiempo favorito",
    "Cada día me siento muy afortunada de tenerte a mi lado",
    "Espero poder darte pronto muchos besitos y abrazos c:",
    "Eres tan bonita como un campo de flores amarillas",
    "Ella sabía que él sabía que algún día pasaría, que vendría a buscarla con sus flores amarillas *music*",
    "Te escogería a ti en cada vida",
    "Gracias por todo lo bonito que me das",
    "Bañate, que te huelen las patas a quesito amarillo. (Amarillo como las flores *ba dum tss*)",
    "🏵️🏵️🏵️ Bouquet 4 my sweetie 🏵️🏵️🏵️",
    "ME ENCANTAASSS, ¿Ya te dije que me encantas? Porque me encantas",
    "Te amo te amo te amo"
];
  //
  function mostrarMensajeModal() {
    var mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    //
    document.getElementById("mensajeModal").textContent = mensaje;
    //
    document.getElementById("msgmodal").style.display = "block";
  }
  //Función para cerrar la ventana modal
  function cerrarModal() {
    document.getElementById("msgmodal").style.display = "none";
  }
  //
  var closeBtn = document.getElementsByClassName("close")[0];
  //
  closeBtn.addEventListener("click", cerrarModal);
  //
  document.getElementById("btnFlores").addEventListener("click", mostrarMensajeModal);

  //Estilos adicionales:
  var flowerBtn = document.getElementById("btnFlores");
  //
  flowerBtn.addEventListener('click', () => {
    flowerBtn.classList.add('button-animation');
    setTimeout(() => {
    flowerBtn.classList.remove('button-animation');
  }, 500);
});
  