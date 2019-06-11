//acordarnos que asi se hace un namaspace un "array" con variables internas
//que solo serviran dentro del array
var dimensiones = {
    // de esta forma se puede obtener el tamano de la pantalla
    ancho: window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientWidth ||
        document.body.clientHeight,
    ladoTiles: 100,
    escala: 1,
    iniciar: function() {
        window.addEventListener("resize", function(evento) {
            dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto = window.innerHeight || document.documentElement.clientWidth || document.body.clientHeight;
            console.log("Ancho: " + dimensiones.ancho + "<br /> Alto: " + dimensiones.alto);
        });
    },
    obtenerTilesHorizontales: function() {

        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        //esto multiplica el lado por la escala 100 * 1 = 100
        return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal);
        // y aqui nos da los cuadrados que caben dentro de la pantalla
        //  ejemplo ((1000 - 100) / 100) seria igual a 9

    },
    obtenerTilesVerticales: function() {
        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        //esto multiplica el lado por la escala 100 * 1 = 100
        return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal);
        // y aqui nos da los cuadrados que caben dentro de la pantalla
        //  ejemplo ((1000 - 100) / 100) seria igual a 9
    },
    obtenerTotalTiles: function() {
        return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
    }
};