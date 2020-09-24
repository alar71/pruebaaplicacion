let item_activo = " ";

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
window_width = w.innerWidth||e.clientWidth||g.clientWidth,
window_height = w.innerHeight||e.clientHeight||g.clientHeight;
console.log (window_height);
document.body.clientHeight = window_height;
console.log ('que mide ' + document.getElementById('navegador').clientHeight);
  console.log (document.getElementById('carousel2').clientHeight);
alto_v = (window_height - (document.getElementById('navegador').clientHeight + 10)) + 'px';
document.getElementById('carousel2').style.height = alto_v;


document.addEventListener("DOMContentLoaded", () => {
  const elementosCarousel = document.querySelectorAll(" .carousel ");
  M.Carousel.init(elementosCarousel, {
    duration: 1000,
    dist: 1 /*perpestiva*/,
    shift: 20,
    padding: 20,
    numVisible: 1 /* cuantas imagenes son visibles*/,
    indicators: true,
    noWrap: false,
    /*pressed: true,*/
    /*fullwidth: true,*/
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // espera que haya cargado el contenido del DOM
  let listado = document.querySelectorAll("a.carousel-item"); // Obtiene las variables de todos los items del carousell
  console.log("en pulsado hay antes: " + listado.hash);
  pulsado = listado.hash;

  console.log('Item_activo que esta activo antes del IF ' + item_activo);
  listado.forEach((listado) => {   // recorre la lista de item
    listado.addEventListener("click", (event) => {
      pulsado = listado.hash; //evento pulsado listado
      if (pulsado !== item_activo || pulsado == undefined) {         
        event.preventDefault();
        item_activo = listado.hash;
        pulsado = item_activo;
        rellenado(item_activo);
        }

        console.log("el item que esta activo es: " + item_activo);

/*        let imagen_card = document.querySelectorAll("div.card");
            imagen_card.forEach((imagen_card) => {
                console.log (imagen_card);
            });*/
        
      });
    });
});

function rellenado(item_activo){
    console.log("en funcion rellenado item_activo vale " + item_activo)
    var l = document.getElementById("ref_item_nav")
    l.href = "../index.html";
}

function quepanel(np){
  localStorage.setItem('numpanel', np);
  console.log ('valor pasado desde html ' + np);
};

