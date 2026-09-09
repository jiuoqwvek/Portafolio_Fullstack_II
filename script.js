"use strict";

const formulario = document.querySelector("#formulario-contacto");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");

// Cada campo tiene su propio elemento de error, identificado por su id
// (no se puede usar campo.parentNode porque label + input comparten el mismo padre: el form).
function idError(campo) {
    return `error-${campo.id}`;
}

// Muestra (o reutiliza) el mensaje de error debajo del campo indicado.
function mostrarError(campo, texto) {
    campo.classList.add("invalido");
    campo.setAttribute("aria-invalid", "true");

    let error = document.getElementById(idError(campo));
    if (!error) {
        error = document.createElement("small");
        error.id = idError(campo);
        error.classList.add("error-mensaje");
        campo.insertAdjacentElement("afterend", error);
    }
    error.textContent = texto;
}

// Quita el error de un campo puntual (cuando vuelve a ser válido).
function limpiarError(campo) {
    campo.classList.remove("invalido");
    campo.removeAttribute("aria-invalid");

    const error = document.getElementById(idError(campo));
    if (error) {
        error.remove();
    }
}

// Reglas de validación por campo. Cada una devuelve un mensaje de error, o null si es válido.
function validarNombre() {
    if (nombre.value.trim().length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
    }
    return null;
}

function validarEmail() {
    const valor = email.value.trim();
    if (!valor.includes("@") || valor.startsWith("@") || valor.endsWith("@")) {
        return "Ingresá un correo electrónico válido (debe contener @).";
    }
    return null;
}

function validarMensaje() {
    if (mensaje.value.trim().length < 10) {
        return "El mensaje debe tener al menos 10 caracteres.";
    }
    return null;
}

// Valida un campo y actualiza su error en pantalla. Devuelve true si es válido.
function validarCampo(campo, validador) {
    const error = validador();
    if (error) {
        mostrarError(campo, error);
        return false;
    }
    limpiarError(campo);
    return true;
}

formulario.addEventListener("submit", function (evento) {
    resultado.textContent = "";
    resultado.classList.remove("resultado-error");

    const nombreValido = validarCampo(nombre, validarNombre);
    const emailValido = validarCampo(email, validarEmail);
    const mensajeValido = validarCampo(mensaje, validarMensaje);

    if (!nombreValido || !emailValido || !mensajeValido) {
        evento.preventDefault();
        resultado.textContent = "Revisá los campos marcados antes de enviar.";
        resultado.classList.add("resultado-error");

        const primerCampoInvalido = formulario.querySelector(".invalido");
        if (primerCampoInvalido) {
            primerCampoInvalido.focus();
        }
    }
    // Si todo es válido, no se cancela el envío: el formulario sigue su camino normal hacia FormSubmit.
});

// Corrige el error de un campo apenas la persona lo arregla, sin esperar a un nuevo envío.
[
    [nombre, validarNombre],
    [email, validarEmail],
    [mensaje, validarMensaje],
].forEach(([campo, validador]) => {
    campo.addEventListener("input", function () {
        if (campo.classList.contains("invalido") && !validador()) {
            limpiarError(campo);
        }
    });
});
