import { registro ,btnp, iconClose, btnRegistro, botonLogin,services, home, notices, contact, containerHome ,containerServices, containerNotices, containerContacts, containerMainNotices, containerMainServices, contactMainContacts } from './nodes.mjs'
import { arrayContacts, arrayNotices,arrayServices } from './obj.mjs';

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

export function cardsNotices(){

    containerMainNotices.innerHTML = ''
    const notices = arrayNotices

    notices.forEach(notice => {
        const containerCards = document.createElement('div')
        const title = document.createElement('h2')
        const parrafo = document.createElement('p')
        const image = document.createElement('img')
        const link = document.createElement('a')
        const linkText = document.createTextNode('Leer más')
        const titleText = document.createTextNode(notice.title)
        const parrafoText = document.createTextNode(notice.description)
        image.src = notice.image
        containerCards.classList.add('cards')
        title.classList.add('cards--title')
        parrafo.classList.add('cards--text')
        image.classList.add('cards--image')
        link.classList.add('cards--link')
        link.setAttribute('href', notice.link)
        link.target = '_blank'
        
        title.appendChild(titleText)
        parrafo.appendChild(parrafoText)
        link.appendChild(linkText)
        containerCards.appendChild(title)
        containerCards.appendChild(parrafo)
        containerCards.appendChild(image)
        containerCards.appendChild(link)
        containerMainNotices.appendChild(containerCards)
    })

}

export function cardsServices() {
    containerMainServices.innerHTML = ''
    const services = arrayServices

    services.forEach(service =>{
        const containerCards = document.createElement('div')
        const title = document.createElement('h2')
        const parrafo = document.createElement('p')
        const image = document.createElement('img')
        const link = document.createElement('a')
        const linkText = document.createTextNode('Leer más')
        const titleText = document.createTextNode(service.title)
        const parrafoText = document.createTextNode(service.description)
        image.src = service.image
        containerCards.classList.add('cards')
        title.classList.add('cards--title')
        parrafo.classList.add('cards--text')
        image.classList.add('cards--image')
        link.classList.add('cards--link')
        link.setAttribute('href', service.link)
        link.target = '_blank'
        
        title.appendChild(titleText)
        parrafo.appendChild(parrafoText)
        link.appendChild(linkText)
        containerCards.appendChild(title)
        containerCards.appendChild(parrafo)
        containerCards.appendChild(image)
        containerCards.appendChild(link)
        containerMainServices.appendChild(containerCards)
    }) 
}

export function CardsContacts (){
    contactMainContacts.innerHTML = ''
    const contacts = arrayContacts

    contacts.forEach(contact =>{
        const card = document.createElement('div');
        card.classList.add('contact-card');
    
        const titulo = document.createElement('h2');
        titulo.textContent = contact.nombre;
    
        const telefono = document.createElement('p');
        telefono.innerHTML = `<strong>Teléfono:</strong> ${contact.telefono}`;
    
        const correo = document.createElement('p');
        correo.innerHTML = `<strong>Correo:</strong> <span>${contact.correo}</span>`;
    
        card.appendChild(titulo);
        card.appendChild(telefono);
        card.appendChild(correo);
    
        contactMainContacts.appendChild(card);
        
    })
}

// <div class="contact-card">
// <h2>Soporte Técnico</h2>
// <p><strong>Teléfono:</strong> +1-800-123-4567</p>
// <p><strong>Correo:</strong> <span>soporte@ciberseguridad.com</span></p>
// </div>