//crtl + f5 = recargar limpiando la cache
// f5 o crtl + r = limpiar pero dejando lo de la cache
document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
}, false);

var inicio = {
    iniciarJuego: function() {
        console.log("Juego iniciado");
        dimensiones.iniciar();
        inicio.recargarTiles();
        buclePrincipal.iterar();
    },
    recargarTiles: function() {
        document.getElementById("juego").innerHTML = "";
        for (var y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
            for (var x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
                var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles,
                    dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }

        //con el for hacemos que se repita la accion la cantidad de rectangulos que haya
    }
};