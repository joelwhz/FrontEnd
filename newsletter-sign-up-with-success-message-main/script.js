const msgError = document.createElement("span");
msgError.textContent = "Valid email required";
msgError.style.color = "hsl(4, 100%, 67%)";
const btn = document.getElementById("submit");
const input = document.getElementById("email");
const form = document.getElementById("form");
const cont = document.getElementById("container");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(e.target));
  miFuncionConDatos(datos);
});

function validar(data) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(data);
}

function miFuncionConDatos(datos) {
  // Limpiar mensajes previos
  if (form.contains(msgError)) form.removeChild(msgError);
  input.classList.remove("valido", "noValido");

  if (validar(datos.email)) {
    input.classList.add("valido");
    // Mostrar mensaje de suscripción exitosa
    mostrarMensajeExito(datos.email);
  } else {
    input.classList.add("noValido");
    form.appendChild(msgError);
  }
}

function mostrarMensajeExito(email) {
  // Ocultar el formulario y mostrar el div de éxito
  const successDiv = document.querySelector(".success-message");

  if (successDiv) {
    // Personalizar el mensaje si es necesario
    const emailSpan = successDiv.querySelector(".success-email");
    if (emailSpan) emailSpan.textContent = email;
    form.style.display = "none";
    successDiv.style.display = "flex";
    // Botón para cerrar el mensaje
    const cerrarBtn = successDiv.querySelector("#cerrarMensaje");
    if (cerrarBtn) {
      cerrarBtn.onclick = function () {
        successDiv.style.display = "none";
        form.style.display = "";
        input.value = "";
        input.classList.remove("valido");
      };
    }
  }
}
