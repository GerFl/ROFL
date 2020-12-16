//console.log("Cargando antes de la función");
(function() {
    "use strict";
    //console.log("Cargando dentro de la función pero antes del Listener");
    document.addEventListener('DOMContentLoaded', function() {
        //console.log("Cargando dentro de la función dentro del Listener");
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
    }); // DOM CONTENT LOADED
    //console.log("Cargando dentro de la función pero después del Listener");
})();
//console.log("Cargando después de la función");