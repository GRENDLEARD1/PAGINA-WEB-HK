import { registro ,btnp, iconClose, btnRegistro, botonLogin,form, cajaRegistro} from './nodes.mjs'


window.addEventListener('hashchange',navigate)


function navigate(){
    if(location.hash.startsWith('#bienvenido')){
        bienvenido()

    }
}

function bienvenido(){
    btnp.style.display = 'none'
    registro.style.display = 'none'
}