import { registro ,btnp, iconClose, btnRegistro, botonLogin,form, cajaRegistro,services, home, notices
    , contact, containerHome ,containerServices, containerNotices, containerContacts } from './nodes.mjs'


window.addEventListener('hashchange',navigate)
window.addEventListener('DOMContentLoaded', navigate)


function navigate(){
    if(location.hash.startsWith('#home')){
        homeSection()
    }
    else if(location.hash.startsWith('#services')){
        serviceSection()
    } else if(location.hash.startsWith('#notices')){
        noticeSection()
    }else if(location.hash.startsWith('#contact')){
        contactSection()
    }
}


function homeSection(){

    btnp.classList.add('inactive')
    registro.classList.add('inactive')
    services.classList.remove('inactive')
    home.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
    containerHome.classList.remove('inactive')
    containerServices.classList.add('inactive')
}

function serviceSection(){
    console.log('services');
    btnp.classList.add('inactive')
    services.classList.remove('inactive')
    home.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
    containerHome.classList.add('inactive')

    containerServices.classList.remove('inactive')

}

function noticeSection(){
    console.log('notices');
    btnp.classList.add('inactive')
    home.classList.remove('inactive')
    services.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
    containerHome.classList.add('inactive')
    containerServices.classList.add('inactive')
    containerNotices.classList.remove('inactive')
    containerContacts.classList.add('inactive')


}

function contactSection(){
    console.log('contact');
    btnp.classList.add('inactive')
    home.classList.remove('inactive')
    services.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
    containerHome.classList.add('inactive')
    containerServices.classList.add('inactive')
    containerNotices.classList.add('inactive')
    containerContacts.classList.remove('inactive')

}
