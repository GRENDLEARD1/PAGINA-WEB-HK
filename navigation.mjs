import { registro ,btnp, iconClose, btnRegistro, botonLogin,form, cajaRegistro,services, home, notices
    , contact} from './nodes.mjs'


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
}

function serviceSection(){
    console.log('services');
    btnp.classList.add('inactive')

}

function noticeSection(){
    console.log('notices');
    btnp.classList.add('inactive')

}

function contactSection(){
    console.log('contact');
    btnp.classList.add('inactive')

}
