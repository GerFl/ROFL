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
        const tamanopantalla = window.innerWidth;
        if (tamanopantalla < 768) {
            window.location.href = 'index.html';
        }
        eventListeners();

        function eventListeners() {
            // Menú móvil
            document.querySelector('.logo a.barras').addEventListener('click', menumovilabrir);
            document.querySelector('.logo a.close').addEventListener('click', menumovilcerrar);
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