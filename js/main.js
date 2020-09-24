let item_activo = "";

document.addEventListener("DOMContentLoaded", () => {
  const elementosCarousel = document.querySelectorAll(".carousel");
  M.Carousel.init(elementosCarousel, {
    duration: 1000,
    dist: 1 /*perpestiva*/,
    shift: 20,
    padding: 20,
    numVisible: 5 /* cuantas imagenes son visibles*/,
    indicators: false,
    noWrap: false,
    fullwidth: false,
    pressed: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // espera que haya cargado el contenido del DOM
  let listado = document.querySelectorAll("a.carousel-item"); // Obtiene las variables de todos los items del carousell
  console.log("antes el valor es: " + listado.hash);
  pulsado = listado.hash;

  console.log(item_activo);
  listado.forEach((listado) => {
    // recorre la lista de item
    listado.addEventListener("click", (event) => {
      pulsado = listado.hash; //evento pulsado listado
      if (pulsado !== item_activo) {
        event.preventDefault();
        item_activo = listado.hash;
        pulsado = item_activo;
        rellenado(item_activo);
        }

        console.log("el item que esta activo es: " + item_activo);

        let imagen_card = document.querySelectorAll("div.card");
            imagen_card.forEach((imagen_card) => {
                console.log (imagen_card);
            });
        
      });
    });
});

function rellenado(item_activo){
    switch (item_activo) {
        case'#one!':
        document.getElementById("tarjeta").style.display = "none";
        break;
        case'#two!':
        document.getElementById("img_card").src="img/panel_alarma.png";
        document.getElementById("titulo_card").textContent="Centrales intrusión";
        document.getElementById("titulo_card").style.fontWeight = 'bold';
        document.getElementById('texto_card').textContent="Opciones de usuario explicadas, anular zona, chime, armar o desarmar , fallos de sistema... ";
        document.getElementById("tarjeta").style.display = "initial";
        var l = document.getElementById("link_pag")
        l.href = "/paginas/intrusion.html";
        M.Carousel.getInstance(destroy());
        break;
        case'#three!':
        document.getElementById("img_card").src="img/fire-black.jpg";
        document.getElementById("titulo_card").textContent="Centrales fuego";
        document.getElementById("titulo_card").style.fontWeight = 'bold';  
        document.getElementById('texto_card').textContent="Opciones de usuario explicadas, anular zonas, visualizar fallos de sistema, detener sirena... ";       
        document.getElementById("tarjeta").style.display = "initial";
        break;
        case'#four!':
        document.getElementById("img_card").src="img/camera.jpg";
        document.getElementById("titulo_card").textContent="Software CCTV";
        document.getElementById("titulo_card").style.fontWeight = 'bold';
        document.getElementById('texto_card').textContent="Uso de algunos software del mercado de cctv, para visualizar, e introducir datos. ";       
        document.getElementById("tarjeta").style.display = "initial";
        break;
    }
}
