let nodoAltavoz = document.querySelector('#altavoz');

// Variables para los sonidos

var fondo = new Audio('audio/fondo.mp3');
fondo.loop = true; // Hacemos que si termina la música de fondo se repita
fondo.volume = 0.2; // Establecemos el volumen

function controlMusicaFondo() {
    // Si la música no está pausada...
    if (!fondo.paused) {
        // Paramos la música
        fondo.pause();

        // Cambiamos la imagen del altavoz
        nodoAltavoz.src = 'img/altavozOff.png';
        // Si no está parada
    } else {
        // Reproducimos la música
        fondo.play();

        // Cambiamos la imagen del altavoz
        nodoAltavoz.src = 'img/altavozOn.png';
    }
}