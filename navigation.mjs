import { registro ,btnp, iconClose, btnRegistro, botonLogin,form, cajaRegistro,services, home, notices
    , contact} from './nodes.mjs'


window.addEventListener('hashchange',navigate)


function navigate(){
    if(location.hash.startsWith('#bienvenido')){
        bienvenido()

    }
}

function bienvenido(){
    btnp.style.display = 'none'
    registro.style.display = 'none'
    services.classList.remove('inactive')
    home.classList.remove('inactive')
    notices.classList.remove('inactive')
    contact.classList.remove('inactive')
}