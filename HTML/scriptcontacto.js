let nombreError = document.getElementById('nombre-error');
let apellidoError = document.getElementById('apellido-error');
let emailError = document.getElementById('email-error');
let comentarioError = document.getElementById('comentario-error');
let submitError = document.getElementById('submit-error');

function validarnombre(){
    let nombre = document.getElementById('nombre-contacto').value;

    if(nombre.length == 0){
        nombreError.innerHTML = 'nombre es obligatorio';
        return false;
    }
    if(!nombre.match(/^[A-Za-z]*$/)){
        nombreError.innerHTML = 'Escribe tu nombre';
        return false;
    }
        nombreError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function validarapellido(){
    let apellido = document.getElementById('apellido-contacto').value;

    if(apellido.length == 0){
        apellidoError.innerHTML = 'apellido es obligatorio';
        return false;
    }
    if(!apellido.match(/^[A-Za-z]*$/)){
        apellidoError.innerHTML = 'Escribe tu apellido';
        return false;
    }
        apellidoError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function validaremail(){
    let email = document.getElementById('email-contacto').value;

    if(email.length == 0){
        emailError.innerHTML = 'email es obligatorio';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Escribe tu email';
        return false;
    }
        emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function validarcomentario(){
    let comentario = document.getElementById('comentario-contacto').value;
    let required = 15;
    let resta = required - comentario.length;

    if(resta > 0){
        comentarioError.innerHTML = resta + 'se requieren mas caracteres';
        return false;
    }
    comentarioError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function validarformulario(){
    if(!validarnombre() || !validarapellido() || !validaremail() || !validarcomentario()){
    submitError.style.display = 'Block';
    submitError.innerHTML = 'No se pudo mandar. Arreglar el problema';
    setTimeout(function(){submitError.style.display = 'None'}, 3000);
    return false;
}
submitError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
return true
}


