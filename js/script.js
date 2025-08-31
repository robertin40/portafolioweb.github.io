// Muestra mensaje de éxito al enviar el formulario (sin backend)
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que recargue la página
  document.getElementById('mensaje-exito').style.display = 'block';
  this.reset(); // Limpia el formulario
});
