// Mostramos un mensaje personalizado
let mensaje = document.getElementById('mensaje')!;

// Escuchar el evento de envío del formulario

let formulario = document.getElementById('formularioNombre');

if (formulario) {

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitamos que el formulario se envíe
        // Obtenemos el valor del campo de texto
        let nombre: string = (document.getElementById('nombre') as HTMLInputElement).value;
        if (nombre.trim() !== "") { // Chequeamos que no esté en blanco
            mensaje.innerText = `¡Hola, ${nombre}! Bienvenido a la página.`;
        } else {
            mensaje.innerText = "Por favor, ingresa un nombre válido.";
        }
    });

}
