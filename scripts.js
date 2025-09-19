// Captura el formulario por su id
const form = document.getElementById("formulario");

// Evento de envío del formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página
  const nombre = document.getElementById("nombre").value;
  alert("Gracias " + nombre + ", hemos recibido tu mensaje. ¡Pronto nos comunicaremos contigo!");
  form.reset(); // Limpia los campos
});
