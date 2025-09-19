// Captura el formulario por su id
const form = document.getElementById("formulario");

// Agrega un evento cuando el usuario envíe el formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página
  const nombre = document.getElementById("nombre").value;
  alert("Gracias " + nombre + ", hemos recibido tu mensaje.");
  form.reset(); // Limpia el formulario
});