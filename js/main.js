//console.log("Cargando antes de la función");
(function() {
    "use strict";
    //console.log("Cargando dentro de la función pero antes del Listener");
    document.addEventListener('DOMContentLoaded', function() {
        //console.log("Cargando dentro de la función dentro del Listener");
        //alert("Pues dije que verías cambios pero no dije que bien chidos xd");
        eventListeners();

        function eventListeners() {
            // Listeners para mostrar el name
            document.querySelector('.sidebar').addEventListener('mouseover', paso);
        }

        function paso(e) {
            e.preventDefault();
            const cursor = e.target.id;
            //console.log(cursor);
            //console.log("Pasaste sobre el sidebar");
            document.querySelector('.proyecto #' + cursor).addEventListener('mouseover', mostrar);
            document.querySelector('.proyecto #' + cursor).addEventListener('mouseleave', ocultar);
            // style="color:#c77210"
        }

        function mostrar(e) {
            e.preventDefault();
            const cursor = e.target.id;
            //console.log(cursor);
            document.querySelector(".proyecto #" + cursor + " p").style.display = "block";
            //console.log(e.target);
        }

        function ocultar(e) {
            e.preventDefault();
            const cursor = e.target.id;
            //console.log(cursor);
            document.querySelector(".proyecto #" + cursor + " p").style.display = "none";
            //console.log(e.target);
        }
        /* Fany me dijo "Te quiero mucho" y fue lo primero que leí en el día y me hizo muy feliz */
    }); // DOM CONTENT LOADED
    //console.log("Cargando dentro de la función pero después del Listener");
})();
//console.log("Cargando después de la función");