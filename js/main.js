(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        console.clear();
        console.log("Sitio hecho para Ricardo Flores.");
        console.log("Desarrollado por Gerardo Flores.");

        const redireccionar=document.querySelector('#new');
        if(redireccionar){
            const tamanopantalla = window.innerWidth;
            if(tamanopantalla<768){
                window.location.href='olddesign/oldie.html';
            }
        }

        const menumovil = document.querySelector('.menu-movil');
        if(menumovil){
            // Menu movil
            document.querySelector('.logo a.barras').addEventListener('click', menumovilabrir);
            document.querySelector('.logo a.close').addEventListener('click', menumovilcerrar);            

        }

        function menumovilabrir(e) {
            e.preventDefault();
            document.querySelector('.iconos').style.display = "flex";
            document.querySelector('.logo a.close').style.display = "block";
            document.querySelector('.logo a.barras').style.display = "none";
        }

        function menumovilcerrar(e) {
            e.preventDefault();
            document.querySelector('.iconos').style.display = "none";
            document.querySelector('.logo a.close').style.display = "none";
            document.querySelector('.logo a.barras').style.display = "block";
        }
        /* Fany me dijo "Te quiero mucho" y fue lo primero que leí en el día y me hizo muy feliz */
    }); // DOM CONTENT LOADED
})();