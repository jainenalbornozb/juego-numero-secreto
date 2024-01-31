let numeroSecreto = 0 ;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Declaración de la función
function verificarIntento () {
    let numerodeUsuario = parseInt (document.getElementById ('valorUsuario').value);
    if (numerodeUsuario === numeroSecreto){
    asignarTextoElemento ('p', `Correcto, acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
    //El usuario no acertó
        if (numerodeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número es menor');
        } else{
            asignarTextoElemento ('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '' ;
    
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'ya se sortearon todos los números posibles')
    } else{
    //si el número sorteado está incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
                }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
}
}

function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p' , 'Indica un número del 1 al 10');
    numeroSecreto =generarNumeroSecreto();
    intentos = 1 ;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //generar el número aleatorio
    //inicializar el número de intentos 
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute( 'disabled', true);
}
condicionesIniciales();
