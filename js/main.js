const iconoMenuHamburguesa = document.querySelector('.topbar__icono-menu-hamburguesa');

const menuDesplegable = document.querySelector('.menu-desplegable'); 

const imagen = document.querySelector('.section__hero__imagen');

iconoMenuHamburguesa.addEventListener('click', function(){
    menuDesplegable.classList.toggle('mostrarmenu');
    imagen.classList.toggle('ocultar-imagen');

});