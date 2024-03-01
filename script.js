const registro = document.querySelector('.registro');
const btnp = document.querySelector('.botonderegistro');
const iconClose = document.querySelector('.icono-cerrar');
btnp.addEventListener('click', ()=>{
    registro.classList.add('activarbtn');
});

iconClose.addEventListener('click', ()=>{
    registro.classList.remove('activarbtn');
});

