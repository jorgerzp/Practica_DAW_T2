document.addEventListener("DOMContentLoaded", () => {

  /* ===== MENSAJE DE BIENVENIDA ===== */
  const overlay = document.getElementById("welcome-overlay");
  const message = document.getElementById("welcome-message");

  if (overlay && message) {
    message.classList.add("show");

    setTimeout(() => {
      overlay.classList.add("hide");
    }, 3000);
  }

  /* ===== FORMULARIO DE CONTACTO ===== */
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("form-msg");

  if (form) { // ✅ evita errores en páginas sin formulario
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      msg.textContent = "✅ ¡Formulario enviado correctamente!";
      msg.classList.add("show");

      form.reset();

      setTimeout(() => {
        msg.classList.remove("show");
      }, 4000);
    });
  }

});
