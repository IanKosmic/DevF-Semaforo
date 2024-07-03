// SEMAFORO, EJERCICIO 5
let semaforoImg = document.getElementById('semaforoImg'); // Obtener la imagen del documento index.html

// Obtener el color inicial del semáforo
let currentLight = prompt('A qué color quieres que cambie el semáforo: ( ROJO | AMARILLO | VERDE )').toLowerCase();

// Función que cambia la luz del semáforo
function cambiarLuz() {
    if (currentLight === 'rojo') {
        currentLight = 'verde';
        semaforoImg.src = "Green_Light_Icon.svg";
    } else if (currentLight === 'verde') {
        currentLight = 'amarillo';
        semaforoImg.src = "Yellow_Light_Icon.svg";
    } else if (currentLight === 'amarillo') {
        currentLight = 'rojo';
        semaforoImg.src = 'Red_Light_Icon.svg';
    } else {
        return;
    }
}

// Cambiar la luz del semáforo cada 3 segundos
setInterval(cambiarLuz, 3000);