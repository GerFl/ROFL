(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function() {
        console.clear();
        console.log("Website made for Architect Ricardo Flores.");
        console.log("Developed by GerFl");

        // Capture screen size when page is being accessed
        const redirect = document.querySelector('#new');
        if (redirect) {
            const screenSize = window.innerWidth;
            if (screenSize < 768) {
                window.location.href = 'olddesign/oldie.html';
            }
        }

        const mobileMenu = document.querySelector('.menu-movil');
        if (mobileMenu) {
            // Mobile menu
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
        const indexBackground = document.querySelector('section#seccion1 img.child');

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
        if (indexBackground) {
            setInterval(() => {
                var ironFist = Math.floor(Math.random() * 10);
                fondoIndex.style.animation = "9s glitchMob infinite";
                fondoIndex.src = `../arrebajaoenlabanera/${glitchGallery[ironFist]}`;
            }, 9000);
        }

        const image=document.querySelectorAll('.padre img');
        image.forEach(image=>{
            image.addEventListener('mouseover',e=>{
                const zoomImage=`
                    <div class="foregroundZoom">
                        <img src="arrebajaoenlabanera/textos/zoom.webp" alt="Zoom" class="imagenhija">
                    </div>
                `;
                image.parentElement.insertAdjacentHTML('beforeend',zoomImage);
            });
        })

        /* LIGHTBOX */
        /* An easy way with pure CSS and JS */
        /* Declare a constant, which is going to be the div where we'll put the image*/
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox'; // Give an ID
        document.body.appendChild(lightbox); // Append the div we just created, but we don't display it yet
        const foreground = document.querySelectorAll('.foregroundZoom'); // Count the elements with .foregroundZoom
        foreground.forEach(forerunner => { // Cicle images
            forerunner.addEventListener('click', e => {
                lightbox.classList.add('active'); // Enable lightbox
                const img = document.createElement('img'); // Create <img>
                img.src = forerunner.previousElementSibling.src; // Extract the image source from the sibling
                // to use it in our lighbox container
                // imageneshija[1].parentElement.previousElementSibling.src
                if (forerunner.previousElementSibling.classList.contains('vertical')) { // Change dimensions if its a vertical image
                    img.style.width = "30%";
                    img.style.height = "100%";
                }
                while (lightbox.firstChild) { // While it has a child
                    lightbox.removeChild(lightbox.firstChild); // KIll child
                    // If you don't kill the child, it will be visible overlapping everything
                }
                lightbox.appendChild(img); // Add as child to lightbox
            })
        });

        /* ENABLE LIGHTBOX FOR THE OLD DESIGN */
        const oldDesignImage = document.querySelectorAll('.vieja');
        oldDesignImage.forEach(image => {
            image.addEventListener('click', e => {
                lightbox.classList.add('active');
                const img = document.createElement('img');
                img.src = image.src;
                if (image.classList.contains('vertical')) {
                    img.style.width = "30%";
                    img.style.height = "100%";
                }
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild);
                }
                lightbox.appendChild(img);
            })
        });

        lightbox.addEventListener('click', e => { // CLick event for the outside of the container
            if (e.target !== e.currentTarget) return; // e.target it's the black background, and e.currentTarget it's the image container
            lightbox.classList.remove('active'); // Remove class 'active', resulting in a display:none
        });
        lightbox.addEventListener('keypress',            function keyPress (e) {
            if(e.key === "Escape" || e.key === "Esc") {
                lightbox.classList.remove('active'); // How to make this work
            }
        })
        /* END LIGHTBOX */

        /* Damn tags */
        /* So hardcoded, so wrong, do not open */
        if (redirect) {
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

        const profilePicture = document.querySelector('img.imagen-perfil');
        if(profilePicture){
           let yLisay = 0;
            profilePicture.addEventListener('click', e => {
                yLisay += 1;
                (yLisay >= 50) ? alert("Pícate la cola pendejo."): '';
            });
        }

    }); // DOM CONTENT LOADED
})();