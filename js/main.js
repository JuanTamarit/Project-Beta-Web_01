const iconoMenuHamburguesa = document.querySelector('.topbar__menu__icon');

const menu = document.querySelector('.topbar__menu--unfolded'); 

const imagen = document.querySelector('.hero-section__image');

const topbar = document.querySelector('.topbar');

iconoMenuHamburguesa.addEventListener('click', function(){
    menu.classList.toggle('mostrarmenu');
    imagen.classList.toggle('ocultar-imagen');
    topbar.classList.toggle('ocultar-margin-topbar');
});


function retocarTipografia() {
    var anchoViewport = window.innerWidth;
    var tituloSectionColabora = document.querySelector(".shop-section__titles"); 
    var tituloSectionIdeas = document.querySelector(".last-entries-section__titulos")
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

  const homeCard = document.querySelector('.js-home-card');
  const homeCardText = document.querySelector('.js-home-card__text');

  homeCard.addEventListener('mouseenter', () => {
    alert('esto tira');
    homeCardText.classList.add('font-size-increase');
});


  homeCard.addEventListener('mouseleave', () => {
    homeCardText.classList.remove('font-size-increase');
  });
