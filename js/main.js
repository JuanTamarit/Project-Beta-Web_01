const iconoMenuHamburguesa = document.querySelector('.topbar__icono-menu-hamburguesa');

const menuDesplegable = document.querySelector('.menu-desplegable'); 

iconoMenuHamburguesa.addEventListener('click', function(){
    menuDesplegable.classList.toggle('mostrarmenu');

});