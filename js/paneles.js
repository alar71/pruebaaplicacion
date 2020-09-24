document.addEventListener("DOMContentLoaded", () => {
  const elementosCarousel = document.querySelectorAll(".carousel");
  M.Carousel.init(elementosCarousel, {
    duration: 1000,
    dist: 1 /*perpestiva*/,
    shift: 20,
    padding: 20,
    numVisible: 1 /* cuantas imagenes son visibles*/,
    indicators: false,
    noWrap: false,
    fullwidth: false,
    pressed: true,
  });
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

np = localStorage.getItem('numpanel');
    console.log ('valor pasado desde html ' + np);

let nl = 0    
let videover = 0
function listav(numlis){
  nl = numlis;
  videover = np + nl;
  console.log('el video que se quiere ver es: '+ videover);

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(factory);
    } else if (typeof exports === 'object') {
      module.exports = factory;
    } else {
      root.fluidvids = factory();
    } 
})(this, function () {

  const rutad = document.getElementById('you');
  
  misrc = rutad.src //aqui se guarda el src original.

    var arrayData = new Array();
    var archivoTxt = new XMLHttpRequest();
    var fileRuta = '/json/datoswy.json' 
    

      archivoTxt.open('GET', fileRuta, true);
      archivoTxt.withCredentials = true;
      archivoTxt.send(null); 
      archivoTxt.onreadystatechange = function () {
 
        if (this.readyState == 4 && this.status == 200){
  
          let datos = JSON.parse(this.responseText);
          let numero = datos.find(elemento => elemento.codigo == videover);
          misrc = numero.direcY;
          rutad.src = numero.direcY; //direccion del video que se quiere ver
        }
    }   

  'use strict';
  
    var fluidvids = {
      selector: ['iframe', 'object'],
      players: ['www.youtube.com', 'player.vimeo.com'],
      defaultRatio: 9/16
    };
    var css = [
      '.fluidvids {',
        'width: 100%; max-width: 100%; position: relative;',
      '}',
      '.fluidvids-item {',
        'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;',
      '}'
    ].join('');
  
    var head = document.head || document.getElementsByTagName('head')[0];
    function matches (misrc) {
      return new RegExp('^(https?:)?\/\/(?:' + fluidvids.players.join('|') + ').*$', 'i').test(misrc);
      }
    
    function getRatio (height, width) {
      var height = parseInt(height, 10),
          width = parseInt(width, 10),
          ratio = fluidvids.defaultRatio;
      if (!isNaN(height) && !isNaN(width)) {
        ratio = height/width;
      }
      return (ratio * 100) + '%';
    }

    function fluid (elem) {
      elem.src = misrc; //aqui se le pasa la nueva url del video
      if (!matches(elem.src) && !matches(elem.data) || !!elem.getAttribute('data-fluidvids')) return;
      var wrap = document.createElement('div');
      elem.parentNode.insertBefore(wrap, elem);
      elem.className += (elem.className ? ' ' : '') + 'fluidvids-item';
      elem.setAttribute('data-fluidvids', 'loaded');
      elem.src = you.src;
      wrap.className += 'fluidvids';
      wrap.style.paddingTop = getRatio(elem.height, elem.width);
      wrap.appendChild(elem); 
      }
   
    function addStyles () {
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style>' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }
  
    fluidvids.render = function () {
      var nodes = document.querySelectorAll(fluidvids.selector.join());
      var i = nodes.length;
      while (i--) {
        fluid(nodes[i]);
      }
    };
  
    fluidvids.init = function (obj) {
      for (var key in obj) {
        fluidvids[key] = obj[key];
      }
      fluidvids.render();
      addStyles();
    };
    
    return fluidvids;
      
  });

  fluidvids.init();
};
  function quepanel(np){
  
    localStorage.getItem('numpanel', np);
    console.log ('valor pasado desde html ' + np);
  };      