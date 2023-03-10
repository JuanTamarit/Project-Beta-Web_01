const iconoMenuHamburguesa = document.querySelector('.topbar__icono-menu-hamburguesa');

const menuDesplegable = document.querySelector('.menu-desplegable'); 

const imagen = document.querySelector('.section__hero__imagen');

const topbar = document.querySelector('.topbar');

iconoMenuHamburguesa.addEventListener('click', function(){
    menuDesplegable.classList.toggle('mostrarmenu');
    imagen.classList.toggle('ocultar-imagen');
    topbar.classList.toggle('ocultar-margin-topbar');
});


function retocarTipografia() {
    var anchoViewport = window.innerWidth;
    var tituloSectionColabora = document.querySelector(".section__colabora__titulos"); 
    var tituloSectionIdeas = document.querySelector(".section__ideas__titulos")
    if (anchoViewport < 1194) {
      tituloSectionColabora.innerHTML = "<h2>Colabora con <br>el proyecto</h2><h5>Prendas exclusivas <br>diseñadas por artistas</h5>";
      tituloSectionIdeas.innerHTML ="<h2>Ideas para <br>el cambio</h2>";


    } else {
      tituloSectionColabora.innerHTML = "<h2>Colabora con el proyecto</h2><h5>Prendas exclusivas diseñadas por artistas</h5>"; 
      tituloSectionIdeas.innerHTML ="<h2>Ideas para el cambio</h2>";

    }
  }
  
  retocarTipografia();
  
  window.addEventListener("resize", retocarTipografia);
