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


        /* LIGHTBOX */
        /* Una manera sencilla con CSS y JavaScript puros */
        /* Se hace una constante que va a ser el div a crear para posicionar la imagen */
        const lightbox=document.createElement('div');
        lightbox.id='lightbox'; // Se le da un ID
        document.body.appendChild(lightbox); // Se añade el div que acabamos de crear, pero con CSS hacemos que no se muestre desde un inicio
        const foreground=document.querySelectorAll('.foregroundZoom'); // Esto es para contar la cantidad elementos foregorundZoom en el documento
        foreground.forEach(fore=>{ // Ciclamos cada foregroudnZoom gracias a la cantidad que acabamos de sacar, teniendo fore como referencia
            fore.addEventListener('click',e=>{ // Evento de click en cada foregroundZoom
                lightbox.classList.add('active'); // Se habilita el lighbox cuando se da click al elemento
                const img=document.createElement('img'); // Creamos un elemento img para nuestro contenedor lightbox
                img.src=fore.previousElementSibling.src; // Accedemos al atributo source del elemento hermano sobre el que queremos extraer el valor y dárselo
                                   // al atributo source de la imagen que queremos poner en el lightbox
                // imageneshija[1].parentElement.previousElementSibling.src
                // 
                if(fore.previousElementSibling.classList.contains('vertical')){ // Este bloque detecta si la imagen tiene clase vertical
                    img.style.width="30%";
                    img.style.height="100%";
                }
                while(lightbox.firstChild){ // Mientras el lightbox tenga un hijo
                    lightbox.removeChild(lightbox.firstChild); // Se removerá ese hijo
                    // En caso de que no se removiera el hijo, cada vez que cerremos el lightbox pero volvamos a abrir otra imagen,
                    // se verán las dos, lo cual no queremos.
                }
                lightbox.appendChild(img); // Añadimos ese elemento como hijo al lightbox
            })
        });

        const imagenDisenoViejo=document.querySelectorAll('.vieja');
        imagenDisenoViejo.forEach(imagen=>{
            imagen.addEventListener('click',e=>{
                lightbox.classList.add('active');
                const img=document.createElement('img');
                img.src=imagen.src;
                if(imagen.classList.contains('vertical')){
                    img.style.width="30%";
                    img.style.height="100%";
                }
                while(lightbox.firstChild){
                    lightbox.removeChild(lightbox.firstChild);
                }
                lightbox.appendChild(img);
            })
        });

        lightbox.addEventListener('click',e=>{ // Evento de click fuera del contenedor de lightbox
            if(e.target!==e.currentTarget) return; // e.target será básicamente el fondo negro, y e.currentTarget es el contenedor de la imagen
            lightbox.classList.remove('active'); // Se quita la clase de active, dando un display:none por default gracias a nuestro CSS
        });
        /* LIGHTBOX */

        /* Perros tags */
        if(redireccionar){
            const pagindex=document.querySelector('#index');
            const pagcomercial=document.querySelector('#pagComercial');
            const pagresidencial=document.querySelector('#pagResidencial');
            const pagrecorridos=document.querySelector('#pagRecorridos');
            const pagrenders=document.querySelector('#renders');
            const tagEspanol=document.querySelector('.lang.espanol');
            const tagIngles=document.querySelector('.lang.ingles');
            const proyectoComercial=document.querySelector('a#proyectocomercial p');
            const proyectoResidencial=document.querySelector('a#proyectoresidencial p');
            const renders=document.querySelector('a#renders p');
            const disenoGrafico=document.querySelector('a#disenografico p');
            const recorridosVirtuales=document.querySelector('a#recorridosvirtuales p');
            const tedMosby=document.querySelector('p#tedmosby');
            const descripcion=document.querySelector('p#texto');
            const residential=document.querySelector('h2#tial');
            tagEspanol.addEventListener('click',e=>{
                e.preventDefault();
                alert("Diste click en spanish.");
                if(pagindex){
                    proyectoComercial.innerText="Desarrollo de estrategias de función y estética";
                    proyectoResidencial.innerText="Proyección de comfortabilidad acorde al usuario";
                    recorridosVirtuales.innerText="Representación cinematográfica de ideas";
                    renders.innerText="Colaboración con diversos profesionales del diseño";
                    disenoGrafico.innerText="Conceptualización de identidad y desarrollo de ideas";
                    tedMosby.innerText="Arquitecto";
                    descripcion.innerText="Apasionado por el diseño en todas sus variantes; experiencia en Interiorismo, diseño arquitectónico y diseño industrial; supervisión de obra. Aficionado del diseño gráfico y técnicas de diseño digital.";                
                }
                if(pagresidencial){
                    residential.innerText="CIAL.";
                }


            });
            tagIngles.addEventListener('click',e=>{
                e.preventDefault();
                alert("Diste click en inglish.");
                if(pagindex){
                    proyectoComercial.innerText="Khe1";
                    proyectoResidencial.innerText="Khe2";
                    renders.innerText="Khe3";
                    disenoGrafico.innerText="Khe4";
                    recorridosVirtuales.innerText="Khe5";
                    tedMosby.innerText="Architect";
                    descripcion.innerText="Jeje";                
                }
                if(pagresidencial){
                    residential.innerText="TIAL."
                }
            });
        }

        /* Fany me dijo "Te quiero mucho" y fue lo primero que leí en el día y me hizo muy feliz */
    }); // DOM CONTENT LOADED
})();