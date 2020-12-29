// console.log("Cargando antes de la función");
(function() {
    "use strict";
    // console.log("Cargando dentro de la función pero antes del Listener");
    document.addEventListener('DOMContentLoaded', function() {
        console.log("Cargando dentro de la función dentro del Listener");
        //alert("Pues dije que verías cambios pero no dije que bien chidos xd");
        console.clear();
        console.log("Sitio hecho para Ricardo Flores Olvera.");
        console.log("Desarrollado por Gerardo Flores Ramírez.");
        console.log("ADVERTENCIA: Los errores que se muestran en consola al pasar el cursor sobre el área del sidebar no son importantes y no afectan la ejecución de la página, son solo detalles que surgieron por una de las funciones implementadas en este mismo script, pero no son relevantes. De igual manera se buscará una mejor manera de obtener el mismo resultado (zoom y encabezado que se añade) de una manera que no lanze alertas.");
        // alert(window.innerWidth);
        eventListeners();

        function eventListeners() {
            // Listeners para mostrar el name
            document.querySelector('.sidebar').addEventListener('mouseover', paso);
            document.querySelector('.logo a.barras').addEventListener('click', menumovilabrir);
            document.querySelector('.logo a.close').addEventListener('click', menumovilcerrar);
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

        function menumovilabrir(e) {
            e.preventDefault();
            // alert("Diste clic pa abrir");
            document.querySelector(".iconos").style.display = "flex";
            document.querySelector('.logo a.close').style.display = "block";
            document.querySelector('.logo a.barras').style.display = "none";
        }

        function menumovilcerrar(e) {
            e.preventDefault();
            // alert("Diste clic pa cerrar");
            document.querySelector(".iconos").style.display = "none";
            document.querySelector('.logo a.close').style.display = "none";
            document.querySelector('.logo a.barras').style.display = "block";
        }
        /* Fany me dijo "Te quiero mucho" y fue lo primero que leí en el día y me hizo muy feliz */
    }); // DOM CONTENT LOADED
    // console.log("Cargando dentro de la función pero después del Listener");
})();
// console.log("Cargando después de la función");