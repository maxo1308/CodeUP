document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Cursos Gratuitos :)",
    "¡Aprende sin costo!",
    "Educación para todos",
    "Únete a nuestras clases gratis",
    "Conocimiento sin barreras",
    "Ahora en 3D",
    "No puedo cerrar el Balatro",
    "Te veo 👀"
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const messageElement = document.getElementById("randomMessage");

  if (messageElement) {
    messageElement.innerHTML = messages[randomIndex];
  }
});
