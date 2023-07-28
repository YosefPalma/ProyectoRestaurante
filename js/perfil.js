// Parte de Julio Cesar Chan Manrique

// Para regresar al menu
return_menu.addEventListener("submit",(a)=>{
  a.preventDefault();
  direction_menu();
});

let direction_menu=()=>{
  window.location="index.html";
};


// Para el editor de datos
const button = document.getElementById("edit_dates");
const form = document.getElementById("editor");

button.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");

    // Obtener el JSON del localStorage
    const datosCuentaJSON = localStorage.getItem("datosCuenta");
    if (datosCuentaJSON) {
      const datosCuenta = JSON.parse(datosCuentaJSON);
      const createUsernameValue = datosCuenta.create_username;
      const createPasswordValue = datosCuenta.create_password;

      // Mostrar los valores del JSON en los campos de edición
      document.getElementById("edit_username").value = createUsernameValue;
      document.getElementById("edit_password").value = createPasswordValue;
    }
  } else {
    form.classList.add("hidden");
  }
});

// Obtener el JSON del localStorage
const datosCuentaJSON = localStorage.getItem("datosCuenta");
if (datosCuentaJSON) {
  const datosCuenta = JSON.parse(datosCuentaJSON);
  const createUsernameValue = datosCuenta.create_username;
  const createPasswordValue = datosCuenta.create_password;

  // Mostrar los valores del JSON en las áreas del HTML
  document.getElementById("username").textContent = "Usuario: " + createUsernameValue;
  document.getElementById("password").textContent = "Contraseña: " + createPasswordValue;

  // Obtener los botones de "Guardar" y "Cancelar"
  const saveChangesButton = document.getElementById("save_changes");
  const cancelButton = document.getElementById("cancel_changes");

  // Agregar eventos click para los botones
  saveChangesButton.addEventListener("click", () => {
    // Obtener los nuevos valores de los campos de edición
    const newUsernameValue = document.getElementById("edit_username").value;
    const newPasswordValue = document.getElementById("edit_password").value;

    // Actualizar el JSON con los nuevos valores
    datosCuenta.create_username = newUsernameValue;
    datosCuenta.create_password = newPasswordValue;

    // Convertir el objeto actualizado a JSON y guardar en localStorage
    localStorage.setItem("datosCuenta", JSON.stringify(datosCuenta));

    // Actualizar los valores mostrados en el HTML
    document.getElementById("username").textContent = "Usuario: " + newUsernameValue;
    document.getElementById("password").textContent = "Contraseña: " + newPasswordValue;

    // Ocultar el formulario de edición
    form.classList.add("hidden");
});

  cancelButton.addEventListener("click", () => {
    // Ocultar el formulario de edición sin hacer cambios en el JSON
    form.classList.add("hidden");
  });
}
