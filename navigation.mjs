import { registro ,btnp, iconClose, btnRegistro, botonLogin,form, cajaRegistro,services, home, notices
    , contact,containerHome} from './nodes.mjs'


window.addEventListener('hashchange',navigate)


function navigate(){
    if(location.hash.startsWith('#bienvenido')){
        bienvenido()
    } else if(location.hash.startsWith('#home')){
        homeSection()
    } else if(location.hash.startsWith('#services')){
        serviceSection()
    } else if(location.hash.startsWith('#notices')){
        noticeSection()
    }else if(location.hash.startsWith('#contact')){
        contactSection()
    }


}

function bienvenido(){
    btnp.classList.add('inactive')
    registro.classList.add('inactive')
    services.classList.remove('inactive')
    home.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
}

function homeSection(){
    console.log('home');
    btnp.classList.add('inactive')
    services.classList.remove('inactive')
    home.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
    containerHome.classList.remove('inactive')
    
}

function serviceSection(){
    console.log('services');
}

function noticeSection(){
    console.log('notices');
}

function contactSection(){
    console.log('contact');
}
