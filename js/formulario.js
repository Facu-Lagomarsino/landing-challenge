function verificarCampos(){
    ci = document.getElementById("ci");
    nombre = document.getElementById("fname");
    apellido = document.getElementById("lname");
    email = document.getElementById("email");
    var selectDepartamentos = document.getElementById("departamentos");
    var valueDepartamento = selectDepartamentos.options[selectDepartamentos.selectedIndex].value;
    var selectLocalidades = document.getElementById("localidades");
    var valueLocalidad = selectLocalidades.options[selectLocalidades.selectedIndex].value;

    if (nombre.value.length < 2){
        nombre.style.borderColor = "red";
    }
    if (apellido.value.length < 2){
        apellido.style.borderColor = "red";
    }
    if (ci.value == "" || !validarCedula(ci.value)){
        ci.style.borderColor = "red";
    }
    if (email.value == "" || !isEmail(email.value)){
        email.style.borderColor = "red";
    }
    if (valueDepartamento == "Departamento") {
        selectDepartamentos.style.borderColor = "red";
    }
    if (valueLocalidad == "Localidad"){
        selectLocalidades.style.borderColor = "red";
    }
}

function desmarcarError(e){
    document.getElementById(e).style.borderColor = "";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

    // DEPARTAMENTO / LOCALIDAD
function cargarSelectDeptos() {
    var deptos = Object.keys(dptosLocs);
    var selectDeptos = document.getElementById("departamentos");
    for (depto in deptos) {
        var option = document.createElement("option");
        option.value = deptos[depto];
        option.text = deptos[depto];
        selectDeptos.appendChild(option);
    }
}

function cargarLocalidades() {
    var departamento = document.getElementById("departamentos").value;
    var localidades = dptosLocs[departamento];
    var selectLocalidades = document.getElementById("localidades");
    for (localidad in localidades) {
        var option = document.createElement("option");
        option.value = localidades[localidad];
        option.text = localidades[localidad];
        selectLocalidades.appendChild(option);
    }
}

