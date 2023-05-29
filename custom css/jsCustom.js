//antes de remasterizar el css terminar el curso 5 de html y css
//+ placeholders cuando validar sea false. Algun div con display=hidden en lugar del alert, o marcar el textarea de rojo 

const mensajeUsuario = document.querySelector ("textarea");

//limitar caracteres 
var limitar=true;
function limitarCaracteres(){
    if(/[0-9]/gi.test(mensajeUsuario.value)==true||/[^a-z]/gi.test(mensajeUsuario.value)==true){
        limitar=false;
        placeholder();
    }else{
        limitar=true;
    }
}
function placeholder(){
    if(limitar==false){
        document.getElementById("mensaje").style.background="#00ff00";//nose como poner un red
    }
}
//limitar caracteres
//calls
function triggerEncriptar(){
    limitarCaracteres();
    if(mensajeUsuario.value==""){
        alert("El campo esta vacio");
    }else if(limitar==false){
        alert("No se permiten caraceteres especiales ni numeros");
    }else if(mensajeUsuario.value!=""){
        showOutput(encriptar(mensajeUsuario.value));
    }
}
function triggerDesencriptar(){
    limitarCaracteres();
    if(mensajeUsuario.value==""){
        alert("el campo esta vacio");
    }else if(limitar==false){
        alert("No se permiten caraceteresespeciales ni numeros");
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
    document.execCommand("copy");//el .execCommand esta deprecado para firefox, pero aun no encontre una solucion superadora
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

 


