(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        console.clear();
        console.log("Sitio hecho para Ricardo Flores.");
        console.log("Desarrollado por GerFl.");

        // Capturar el tamaño de pantalla al momento de entrar a la pagina
        const redireccionar = document.querySelector('#new');
        if (redireccionar) {
            const tamanopantalla = window.innerWidth;
            if (tamanopantalla < 768) {
                window.location.href = 'olddesign/oldie.html';
            }
        }

        const menumovil = document.querySelector('.menu-movil');
        if (menumovil) {
            // Menu movil
            document.querySelector('.logo a.barras').addEventListener('click', e => {
                e.preventDefault();
                document.querySelector('.iconos').style.display = "flex";
                document.querySelector('.logo a.close').style.display = "block";
                document.querySelector('.logo a.barras').style.display = "none";
            });
            document.querySelector('.logo a.close').addEventListener('click', e => {
                e.preventDefault();
                document.querySelector('.iconos').style.display = "none";
                document.querySelector('.logo a.close').style.display = "none";
                document.querySelector('.logo a.barras').style.display = "block";
            });
        }

        /* GLITCHMOB */
        const fondoIndex = document.querySelector('section#seccion1 img.hijo');

        const glitchGallery = [
            "disenografico/diseno3.webp",
            "proyectocomercial/B-min2.webp",
            "proyectocomercial/comercial4.webp",
            "proyectocomercial/comercial6.webp",
            "proyectocomercial/comercial7.webp",
            "proyectocomercial/comercial12.webp",
            "proyectoresidencial/residencial21.jpeg",
            "proyectoresidencial/residencial22.jpeg",
            "proyectoresidencial/residencial7.webp",
            "proyectoresidencial/residencial9.webp",
        ];
        if (fondoIndex) {
            setInterval(() => {
                var rand = Math.floor(Math.random() * 10);
                fondoIndex.style.animation = "9s glitchMob infinite";
                fondoIndex.src = `../arrebajaoenlabanera/${glitchGallery[rand]}`;
            }, 9000);
        }
        /* LIGHTBOX */
        /* Una manera sencilla con CSS y JavaScript puros */
        /* Se hace una constante que va a ser el div a crear para posicionar la imagen */
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox'; // Se le da un ID
        document.body.appendChild(lightbox); // Se añade el div que acabamos de crear, pero con CSS hacemos que no se muestre desde un inicio
        const foreground = document.querySelectorAll('.foregroundZoom'); // Esto es para contar la cantidad elementos foregorundZoom en el documento
        foreground.forEach(fore => { // Ciclamos cada foregroudnZoom gracias a la cantidad que acabamos de sacar, teniendo fore como referencia
            fore.addEventListener('click', e => { // Evento de click en cada foregroundZoom
                lightbox.classList.add('active'); // Se habilita el lighbox cuando se da click al elemento
                const img = document.createElement('img'); // Creamos un elemento img para nuestro contenedor lightbox
                img.src = fore.previousElementSibling.src; // Accedemos al atributo source del elemento hermano sobre el que queremos extraer el valor y dárselo
                // al atributo source de la imagen que queremos poner en el lightbox
                // imageneshija[1].parentElement.previousElementSibling.src
                // 
                if (fore.previousElementSibling.classList.contains('vertical')) { // Este bloque detecta si la imagen tiene clase vertical
                    img.style.width = "30%";
                    img.style.height = "100%";
                }
                while (lightbox.firstChild) { // Mientras el lightbox tenga un hijo
                    lightbox.removeChild(lightbox.firstChild); // Se removerá ese hijo
                    // En caso de que no se removiera el hijo, cada vez que cerremos el lightbox pero volvamos a abrir otra imagen,
                    // se verán las dos, lo cual no queremos.
                }
                lightbox.appendChild(img); // Añadimos ese elemento como hijo al lightbox
            })
        });

        /* HABILITAR LIGHTBOX PARA EL DISEÑO VIEJO */
        const imagenDisenoViejo = document.querySelectorAll('.vieja');
        imagenDisenoViejo.forEach(imagen => {
            imagen.addEventListener('click', e => {
                lightbox.classList.add('active');
                const img = document.createElement('img');
                img.src = imagen.src;
                if (imagen.classList.contains('vertical')) {
                    img.style.width = "30%";
                    img.style.height = "100%";
                }
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild);
                }
                lightbox.appendChild(img);
            })
        });

        lightbox.addEventListener('click', e => { // Evento de click fuera del contenedor de lightbox
            if (e.target !== e.currentTarget) return; // e.target será básicamente el fondo negro, y e.currentTarget es el contenedor de la imagen
            lightbox.classList.remove('active'); // Se quita la clase de active, dando un display:none por default gracias a nuestro CSS
        });
        /* CIERRE LIGHTBOX */

        /* Perros tags */
        /* Esto está bien hardcodeado, lo sé, no lo abras xD */
        if (redireccionar) {
            const pagindex = document.querySelector('#index');
            const pagcomercial = document.querySelector('#pagComercial');
            const pagresidencial = document.querySelector('#pagResidencial');
            const pagrecorridos = document.querySelector('#pagRecorridos');
            const tagEspanol = document.querySelector('.lang.espanol');
            const tagIngles = document.querySelector('.lang.ingles');
            const titulocomercial = document.querySelector('a#proyectocomercial p#titulo');
            const tituloresidencial = document.querySelector('a#proyectoresidencial p#titulo');
            const titulodiseno = document.querySelector('a#disenografico p#titulo');
            const titulorecorrido = document.querySelector('a#recorridosvirtuales p#titulo');
            const proyectoComercial = document.querySelector('a#proyectocomercial p#description');
            const proyectoResidencial = document.querySelector('a#proyectoresidencial p#description');
            const renders = document.querySelector('a#renders p#curseado');
            const disenoGrafico = document.querySelector('a#disenografico p#description');
            const recorridosVirtuales = document.querySelector('a#recorridosvirtuales p#description');
            const tedMosby = document.querySelector('p#tedmosby');
            const descripcion = document.querySelector('p#texto');
            const residential = document.querySelector('h2#tial');
            const commercial = document.querySelector('h2#mmer');
            const gra = document.querySelector('h2#gra');
            const fi = document.querySelector('h2#fi');
            const co = document.querySelector('h2#co');
            tagEspanol.addEventListener('click', e => {
                e.preventDefault();
                if (pagindex) {
                    proyectoComercial.innerText = "Desarrollo de estrategias de función y estética";
                    proyectoResidencial.innerText = "Proyección de comfortabilidad acorde al usuario";
                    recorridosVirtuales.innerText = "Representación cinematográfica de ideas";
                    renders.innerText = "Colaboración con diversos profesionales del diseño";
                    disenoGrafico.innerText = "Conceptualización de identidad y desarrollo de ideas";
                    tedMosby.innerText = "Arquitecto";
                    descripcion.innerText = "Apasionado por el diseño en todas sus variantes; experiencia en Interiorismo, diseño arquitectónico y diseño industrial; supervisión de obra. Aficionado del diseño gráfico y técnicas de diseño digital.";
                    titulocomercial.innerText = "Proyecto comercial";
                    tituloresidencial.innerText = "Proyecto residencial";
                    titulodiseno.innerText = "Diseño grafico";
                    titulorecorrido.innerText = "Recorridos virtuales";
                }
                if (pagresidencial) {
                    residential.innerText = "CIAL.";
                }
                if (pagcomercial) {
                    commercial.innerText = "MER";
                }
                if (pagdiseno) {
                    gra.innerText = "GRA";
                    fi.innerText = "FI";
                    co.style.display = "block";
                }
            });
            tagIngles.addEventListener('click', e => {
                e.preventDefault();
                if (pagindex) {
                    proyectoComercial.innerText = "Aesthetical strategies and functionality development";
                    proyectoResidencial.innerText = "Comfort projects for the user experience";
                    renders.innerText = "Professinal design coworking";
                    disenoGrafico.innerText = "Identity conceptualization and development";
                    recorridosVirtuales.innerText = "Cinematogtaphic representation of ideas";
                    tedMosby.innerText = "Architect";
                    descripcion.innerText = "Passionate about design, experienced in interior, architectural & industrial design development. Enthusiastic about graphic design and other digital technics.";
                    titulocomercial.innerText = "Commercial";
                    tituloresidencial.innerText = "Residential";
                    titulodiseno.innerText = "Graphic";
                    titulorecorrido.innerText = "Virtual tour";
                }
                if (pagresidencial) {
                    residential.innerText = "TIAL."
                }
                if (pagcomercial) {
                    commercial.innerText = "MMER";
                }
                if (pagdiseno) {
                    gra.innerText = "GRA";
                    fi.innerText = "PHIC.";
                    co.style.display = "none";
                }
            });
        }

        const imagenPerfil = document.querySelector('img.imagen-perfil');
        let yLisay = 0;
        imagenPerfil.addEventListener('click', e => {
            yLisay += 1;
            (yLisay >= 50) ? alert("Pícate la cola pendejo."): '';
        });

    }); // DOM CONTENT LOADED
})();