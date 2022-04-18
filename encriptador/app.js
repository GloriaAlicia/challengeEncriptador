    var botonEncriptar = document.getElementById("botonEncriptar");
    botonEncriptar.addEventListener("click", encriptador);
    let icono = document.getElementById("iconCorrecto").style.display = "none";
    var textoVacio = " "

    var mostrar = document.getElementById("mostrar");
    var titulo = document.getElementById("titulo");
/* evitar mayusculas, acentos o caracteres especiales*/
function limpiarEntrada() {
    let entrada = document.getElementById("entrada").value.toLowerCase();
    let entradaLimpia = "string";
    
    entradaLimpia.innerHTML = entrada.split("á").join("a").split("é").join("e").split("í").join("i").split("ó").join("o").split("ú").join("u").split("!").join("").split("?").join("").split("#").join("").split("$").join("").split("%").join("").split("&").join("").split("/").join("").split("(").join("").split(")").join("").split("=").join("").split("¿").join("").split("¡").join("").split("+").join("").split("ö").join("");
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

  //  mostrar.innerHTML = "";
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

    document.getElementById("entrada").value = textoVacio;
    
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

/*responsive en javascript*/
var breakpoint = document.documentElement.clientWidth;
if (breakpoint <= 750) {
    function muestraEncriptacion() {
        document.getElementById("seccionEntrada").style.display = "none";
        document.getElementById("seccionMostrar").style.display = "flex";
    }

    /* para volver */
    let botonVolver = document.getElementById("volver")
    botonVolver.addEventListener("click", vuelve);
    function vuelve() {
        document.getElementById("seccionMostrar").style.display = "none";
        document.getElementById("seccionEntrada").style.display = "flex";
        document.getElementById("seccionEntrada").style.flexDirection = "column";
    }

    botonEncriptar.addEventListener("click", encriptador);
    botonEncriptar.addEventListener("click", muestraEncriptacion);

    botonDes.addEventListener("click", desencriptar);
    botonDes.addEventListener("click", muestraEncriptacion);
}