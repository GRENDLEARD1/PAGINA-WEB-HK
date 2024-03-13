import { registro ,btnp, iconClose, btnRegistro, botonLogin,form, cajaRegistro,services, home, notices
    , contact, containerMainNotices} from './nodes.mjs'
import { arrayNotices } from './obj.mjs';

// ! Event listener
botonLogin.addEventListener('click',function(event) {
    event.preventDefault();

    console.log('home');
    btnp.classList.add('inactive')
    registro.classList.add('inactive')
    services.classList.add('inactive')
    home.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
    services.classList.remove('inactive')
    containerHome.classList.add('inactive')
    containerServices.classList.add('inactive')
    location.hash = '#home'

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


// ! cards function

export function cards(){

    containerMainNotices.innerHTML = ''
    const notices = arrayNotices

    notices.forEach(notice => {
        const containerCards = document.createElement('div')
        const title = document.createElement('h2')
        const parrafo = document.createElement('p')
        const image = document.createElement('img')
        containerCards.classList.add('cards')
        const titleText = document.createTextNode(notice.title)
        const parrafoText = document.createTextNode(notice.description)

        
        title.appendChild(titleText)
        parrafo.appendChild(parrafoText)
        containerCards.appendChild(title)
        containerCards.appendChild(parrafo)
        containerCards.appendChild(image)
        containerMainNotices.appendChild(containerCards)
    })

}
