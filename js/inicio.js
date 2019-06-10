//crtl + f5 = recargar limpiando la cache
// f5 o crtl + r = limpiar pero dejando lo de la cache
document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
}, false);

var inicio = {
    iniciarJuego: function() {
        console.log("Juego iniciado");
        buclePrincipal.iterar();
    }
};