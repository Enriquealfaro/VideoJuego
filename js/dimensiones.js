//acordarnos que asi se hace un namaspace un "array" con variables internas
//que solo serviran dentro del array
var dimensiones = {
    // de esta forma se puede obtener el tamano de la pantalla
    ancho: window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientWidth ||
        document.body.clientHeight,
    iniciar: function() {
        window.addEventListener("resize", function(evento) {
            dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto = window.innerHeight || document.documentElement.clientWidth || document.body.clientHeight;
            console.log("Ancho: " + dimensiones.ancho + "<br /> Alto: " + dimensiones.alto);
        });
    }
};