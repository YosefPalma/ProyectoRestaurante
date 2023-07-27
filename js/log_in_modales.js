/* Parte de Julio Cesar Chan Manrique */
// Formulario principal - log-in

// Para regresar el menu (Boton x arreglado)
return_menu.addEventListener("submit",(a)=>{
    a.preventDefault();
    direction_menu();
});

let direction_menu=()=>{
    window.location="index.html";
};

/* Para el forms de log-in */
let username=document.getElementById("username");
let password=document.getElementById("password");

let usuario_default="Jul24";
let contraseña_default="@Bbaurio204";

// Validación del forms log-in (nada en blanco)
form_log_in.addEventListener("submit", (a) =>{
    a.preventDefault();
    verification();     
});

let verification = () => {
    if (username.value === "" || password.value === "") {
        alert("¡No puedes dejar campos vacíos para iniciar sesión!.");
    } else {
        //Buscar atributos en el JSON
        const datosCuentaJSON = localStorage.getItem("datosCuenta");
        if (datosCuentaJSON) {
            const datosCuenta = JSON.parse(datosCuentaJSON);
            const createUsernameValue = datosCuenta.create_username;
            const createPasswordValue = datosCuenta.create_password;

            if (username.value === createUsernameValue && password.value === createPasswordValue) {
                direction_menu();
                username.value = "";
            } else {
                alert("La contraseña o el nombre de usuario no es correcto");
            }
        } else {
            alert("No se encontraron datos de cuenta. Por favor, crea una cuenta primero.");
        }
    }
};


/* Ventana modal para crear cuentas */

// Abrir ventana modal
let modal_open_create_account=()=>{
    modal_sing_up.showModal();
}

// Boton X para salir de la ventana modal
create_account_exit.addEventListener("submit",(a)=>{
    a.preventDefault();
    modal_close_create_account();
});

// form de la vantanda modal de crear cuenta
let create_username=document.getElementById("create_username");
let use_email=document.getElementById("use_email");
let create_password=document.getElementById("create_password");

// Boton X para salir de la ventana modal
remember_password_exit.addEventListener("submit",(a)=>{
    a.preventDefault();
    modal_close_password();
});

// forms
// Función para crear el JSON con los valores ingresados en el formulario de crear cuenta
const crearJSON = () => {
    const createUsernameValue = create_username.value;
    const useEmailValue = use_email.value;
    const createPasswordValue = create_password.value;
  
    // Crear un objeto con los valores obtenidos del formulario de crear cuenta
    const datosCuenta = {
      "create_username": createUsernameValue,
      "use_email": useEmailValue,
      "create_password": createPasswordValue
    };
  
    // Convertir el objeto a JSON usando JSON.stringify()
    const datosCuentaJSON = JSON.stringify(datosCuenta);
    console.log(datosCuentaJSON)
  
    // Guardar el JSON en el localStorage
    localStorage.setItem("datosCuenta", datosCuentaJSON);

    create_username.value=""
    use_email.value="";
    create_password.value="";
  };
  

create_account.addEventListener("submit",(a)=>{
    a.preventDefault();
    verification_create_account();
});

const verification_create_account=()=>{
    if(create_username.value === "" || use_email.value === "" || create_password.value === ""){
        alert("¡No puedes dejar campos vacios!.\nPor favor completa todos los campos para poder crear tu cuenta.");
    }else{
        crearJSON();
        alert("¡Cuenta creada con exito! :)");
        modal_close_create_account();
    }
};

// Cerrar ventana modal
let modal_close_create_account=()=>{
    modal_sing_up.close();
}

/* Ventana modal para recordar contraseña */

// Abrir ventana modal
let modal_open_remember_password=()=>{
    modal_password.showModal();
}

// form de la ventanda modal de recordar contraseña
let emial=document.getElementById("email");
let see_password=document.getElementById("see_password");

recordar_contraseña.addEventListener("submit",(a)=>{
    a.preventDefault();
    verification_password();
});

let verification_password=()=>{
    if(emial.value === ""){
        alert("Por favor rellena el campo para que puedas ver tu contraseña");
    }else{

        const datosCuentaJSON = localStorage.getItem("datosCuenta");
        if (datosCuentaJSON) {
            const datosCuenta = JSON.parse(datosCuentaJSON);
            const useEmailValue = datosCuenta.use_email;
            const createPasswordValue = datosCuenta.create_password;

            if (emial.value === useEmailValue) {
                see_password.style.color="black";
                see_password.innerHTML="Tu contraseña es: " + createPasswordValue +"<br>Haz click en 'X' para dejar de ver";
                emial.value=""
            } else {
                emial.value=""
                alert("El correo que porporcionaste no existe favor de ingresar el correcto");
            }
        } else {
            emial.value=""
            alert("No se encontraron datos de cuenta. Por favor, crea una cuenta primero.");
        }
    }
}

// Cerrar ventana modal
let modal_close_password=()=>{
    modal_password.close();
    see_password.innerHTML="";
}

/****** Conversión de archivos JSON ************************/


// localStorage.setItem("usernames",username) //<-- Ejemplo de como guardar los datos