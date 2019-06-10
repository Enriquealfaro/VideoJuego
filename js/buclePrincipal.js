// namespace - espacio de nombre
//Main loop - bucle principal
//aps = actualizaciones por segundo
//fps = frames por segundo
//callback
//1s = 1000ms

var buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal) {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
        /*//De esta forma se produce el bucle
        Iterar corre esta funcion, que dentro tiene el buclePrincipal,
        que ejecuta el bucle dle jeugo y a su vez hace que el sistema inyecte el 
        reqistroTemporal que es tiempo que lleva desde que esto empezo
        a correr.
        */

        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar(registroTemporal);

        if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
            //esto hace que se entre destro de esta condicional cada segundo
            // y que nos de los valores que se consiguio dentro de ese tiempo
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
            /*Se iguala ultimoRegistro a resgistroTemporal para que pueda 
            segir entrando dentro del if y danto el segundo
            despues de eso se cuenta los aps y fps, despues se igual a cero
            para que la el valor cada segundo llegue a 60 y no se sume*/
        }
    },
    detener: function() {

    },
    actualizar: function(registroTemporal) {
        buclePrincipal.aps++;
    },
    dibujar: function(registroTemporal) {
        buclePrincipal.fps++;
    }
};