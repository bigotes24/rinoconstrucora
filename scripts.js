// Capturamos el formulario
const form = document.getElementById("formulario");

// Evento de envío
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;

  alert(`✅ Gracias ${nombre}, hemos recibido tu mensaje.
📧 Correo: ${correo}
📞 Teléfono: ${telefono}`);

  form.reset(); // Limpia el formulario
});
