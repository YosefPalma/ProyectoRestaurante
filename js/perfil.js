// Parte de Julio Cesar Chan Manrique
var valor=localStorage.getItem("usernames");
document.write(valor);

const button = document.getElementById("edit_dates");
const form = document.getElementById("editor");

button.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
});
