import { registro ,btnp, iconClose, btnRegistro, botonLogin,form} from './nodes.mjs'

// ! Event listener

botonLogin.addEventListener('click',function(event) {
    event.preventDefault();
    location.hash = '#bienvenido'
    console.log(location.hash);
})

btnp.addEventListener('click', ()=>{
    registro.classList.add('activarbtn');
});

iconClose.addEventListener('click', ()=>{
    registro.classList.remove('activarbtn');
});

btnRegistro.addEventListener('click', ()=>{
    const h1 = document.querySelector('.caja-registro h2')
    const registroParrafo = document.querySelector('.iniciar-registro')
    const botonRegistro = document.querySelector('.btn-text')
    const Recordarme = document.querySelector('.recordar label')
    const password = document.querySelector('.recordar a')

    h1.innerHTML = 'Registro'
    botonRegistro.textContent = 'Registrarse'
    registroParrafo.remove()
    Recordarme.remove()
    password.remove()
})


// 

