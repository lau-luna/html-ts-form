// Mostramos un mensaje personalizado
var mensaje = document.getElementById('mensaje');
// Escuchar el evento de envío del formulario
var formulario = document.getElementById('formularioNombre');
if (formulario) {
    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitamos que el formulario se envíe
        // Obtenemos el valor del campo de texto
        var nombre = document.getElementById('nombre').value;
        if (nombre.trim() !== "") { // Chequeamos que no esté en blanco
            mensaje.innerText = "\u00A1Hola, ".concat(nombre, "! Bienvenido a la p\u00E1gina.");
        }
        else {
            mensaje.innerText = "Por favor, ingresa un nombre válido.";
        }
    });
}
