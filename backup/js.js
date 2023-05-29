
const mensajeUsuario = document.querySelector ("textarea");

//limitar caracteres
var limitar=true;
function limitarCaracteres(){
    if(/[0-9]/gi.test(mensajeUsuario.value)==true){
        console.log("no se permiten numeros");
        limitar=false;
    }else{
        console.log("mensaje valido pa");
        limitar=true;
    }
}
//limitar caracteres
//calls
function triggerEncriptar(){
    limitarCaracteres();
    if(mensajeUsuario.value==""||limitar==false){
        alert("El campo esta vacio");
    }else if(mensajeUsuario.value!=""){
        showOutput(encriptar(mensajeUsuario.value));
    }
}
function triggerDesencriptar(){
    if(mensajeUsuario==""){
        alert("el campo esta vacio");
    }else if(mensajeUsuario!=""){
        showOutput(desencriptar(mensajeUsuario.value));
    }
}
//calls
//logica cifrar/descifrar
function encriptar(mensaje){ 
    mensaje=mensaje.replace(/e/gi, "enter");
    mensaje=mensaje.replace(/i/gi, "imes");
    mensaje=mensaje.replace(/a/gi, "ai");
    mensaje=mensaje.replace(/o/gi, "over");
    mensaje=mensaje.replace(/u/gi, "ufat");
    return mensaje;
}
function desencriptar(mensaje){ 
    mensaje=mensaje.replace(/enter/gi, "e");
    mensaje=mensaje.replace(/imes/gi, "i");
    mensaje=mensaje.replace(/ai/gi, "a");
    mensaje=mensaje.replace(/over/gi, "o");
    mensaje=mensaje.replace(/ufat/gi, "u");
    return mensaje;
}
//logica cifrar/descifrar
//copiar button
function copiar() {
    let textarea = document.getElementById("output");
    textarea.select();
    document.execCommand("copy");//el .execCommand esta deprecado para firefox, peor aun no encontre una solucion superadora
}
//copiar button
//output
function showOutput(mensaje){
    mensajeUsuario.value=mensaje;
    console.log(mensajeUsuario.value);
    document.getElementById("frente").style.display="none";
    document.getElementById("dorso").style.display="block";
    document.getElementById ("output").value=mensajeUsuario.value.toLowerCase();
    document.getElementById ("mensaje").value="";
}
//output

 


