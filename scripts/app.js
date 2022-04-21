    var botonEncriptar = document.getElementById("botonEncriptar");
    botonEncriptar.addEventListener("click", encriptador);
    let icono = document.getElementById("iconCorrecto").style.display = "none";

    var mostrar = document.getElementById("mostrar");
    var titulo = document.getElementById("titulo");
/* evitar mayusculas, acentos o caracteres especiales*/
function limpiarEntrada() {
    let entrada = document.getElementById("entrada").value.toLowerCase();

    var caracEspeciales = "áóéí!@#$^&%*()+=-[]\/{}|:<>?,.";
    for (var i = 0; i < caracEspeciales.length; i++) { 
         entrada = entrada.replace(new RegExp("\\" + caracEspeciales[i], 'gi'), '');
    }
    return entrada;
}

function encriptador() {
    let entradaLimpiada = limpiarEntrada();
    let diccionario = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    mostrar.innerHTML = entradaLimpiada.replace(/a|e|i|o|u/g, function(reemplazar) {
        return diccionario[reemplazar];
    } )
    ver()
}
/* desencriptar */
let botonDes = document.getElementById("botonDes");
botonDes.addEventListener("click", desencriptar);

function desencriptar() {
    let entradaLimpiada = limpiarEntrada();

    let nuevodic = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };

    mostrar.innerHTML = entradaLimpiada.replace(/ai|enter|imes|ober|ufat/g, function(reemplazar) {
        return nuevodic[reemplazar];
    } )
    ver();
}
/* copiar al portapapeles */
let botonCopiar = document.getElementById("bcopiar");
botonCopiar.addEventListener("click", copiar);

function copiar() {
    let textoCopiado = document.getElementById("mostrar").value;
    navigator.clipboard.writeText(textoCopiado);

    document.getElementById("entrada").value = " ";
    
    ocultar()
}

/* ocultar y mostrar elementos */
function ver(){
    document.getElementById("iconCorrecto").style.display = "block";
    titulo.innerHTML = "Mensaje Encontrado";
    mostrar.style.height= "40vh";
    let imgSinMensaje = document.getElementById("imagenSinMensaje").style.display = "none";
}

function ocultar(){
    document.getElementById("iconCorrecto").style.display = "none";
    titulo.innerHTML = "Ningun mensaje fue encontrado";
    mostrar.innerHTML = " ";
    mostrar.style.height= "5vh";
    imgSinMensaje = document.getElementById("imagenSinMensaje").style.display = "block";
}


var entrada = document.getElementById("entrada");
entrada.addEventListener('input', vacio);

function vacio() {
    document.querySelector(".aviso").classList.add("oculto");
}



/*responsive en javascript*/
    var breakpoint = document.documentElement.clientWidth;
    if (breakpoint <= 750){
    muestraResultado();
    }
    
    let mediaQuerypequeña = window.matchMedia("screen and (max-width:750px)");
    let mediaQuerygrande = window.matchMedia("screen and (min-width: 751px)");
    let orientacion = window.matchMedia("(orientation: portrait)");

    mediaQuerypequeña.onchange = (reescala) => {
        vuelve()
        if (reescala.matches) {
            muestraResultado();
        }
    }
    orientacion.onchange = (reescala) => {
        vuelve();
    }
    function muestraResultado() {
        botonEncriptar.addEventListener("click", encriptador);
            botonEncriptar.addEventListener("click", muestraEncriptacion);
            botonDes.addEventListener("click", muestraEncriptacion);

            function muestraEncriptacion() {
            document.getElementById("seccionEntrada").style.display = "none";
            document.getElementById("seccionMostrar").style.display = "flex";
            }
    }
    let botonVolver = document.getElementById("volver")
        botonVolver.addEventListener("click", vuelve);
        function vuelve() {
            document.getElementById("seccionMostrar").style.display = "none";
            document.getElementById("seccionEntrada").style.display = "flex";
            document.getElementById("seccionEntrada").style.flexDirection = "column";
        }
    mediaQuerygrande.onchange = (reescala) => {
        vuelve();
        if (reescala.matches){
            document.getElementById("seccionMostrar").style.display = "flex";
            document.getElementById("seccionEntrada").style.display = "flex";
            document.getElementById("seccionEntrada").style.flexDirection = "column";
        }
    }