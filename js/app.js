// Variables
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDecencriptar = document.querySelector(".btnDecencriptar");
const resultado = document.querySelector('.resultado');
const resultadoImagen = document.querySelector('#resultadoImagen');
const resultadoMensaje = document.querySelector('#resultadoMensaje');
const resultadoTexto = document.querySelector('#resultadoTexto');
const validar = document.querySelector('.validar');

// Eventos
btnEncriptar.addEventListener('click', encriptarTexto);
btnDecencriptar.addEventListener('click', decencriptarTexto);

// Funciones
function encriptarTexto() {
    let texto = document.querySelector("#texto").value;
    if (removerAcentos(texto)) {
        mostrarMensaje("Ningún mensaje fue encriptado", "Encuentra el texto que deseas encriptar o desencriptar");
        return;
    }
    let textoEncriptado = texto
        .replace(/e/img, 'enter')
        .replace(/i/mg, 'imes')
        .replace(/a/mg, 'ai')
        .replace(/o/mg, 'ober')
        .replace(/u/mg, 'ufat');
    mostrarResultado(textoEncriptado);
}

function removerAcentos(texto) {
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
        return true;
    }
    if (texto !== texto.toLowerCase()) {
        return true;
    }
    return false;
}

function mostrarResultado(texto) {
    resultadoImagen.style.display = 'none'; // Oculta la imagen
    resultadoMensaje.textContent = "Texto encriptado:";
    resultadoTexto.innerHTML = `<textarea readonly>${texto}</textarea><button class="btnCopiar">Copiar</button>`;
    document.querySelector('.btnCopiar').addEventListener('click', copiarTexto);
}

function mostrarMensaje(mensaje, texto) {
    resultadoImagen.style.display = 'block'; // Muestra la imagen
    resultadoMensaje.textContent = mensaje;
    resultadoTexto.textContent = texto;
}

async function copiarTexto() {
    try {
        const textarea = document.querySelector('.resultado textarea');
        await navigator.clipboard.writeText(textarea.value);
        console.log('Texto copiado al portapapeles exitosamente.');
    } catch (err) {
        console.error('Error al copiar el texto al portapapeles:', err);
    }
}

function decencriptarTexto() {
    let texto = document.querySelector("#texto").value;
    let textoDesencriptado = texto
        .replace(/enter/mg, 'e')
        .replace(/imes/mg, 'i')
        .replace(/ai/mg, 'a')
        .replace(/ober/mg, 'o')
        .replace(/ufat/mg, 'u');
    mostrarResultado(textoDesencriptado);
}

