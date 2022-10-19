//2) Realizá un programa que permita al usuario ingresar un número entero. La computadora debe 
//informar el número opuesto1 y el número inverso2 del ingresado. (Ver ejemplo)

function obtenerNumOpuestoEInverso() {
    let numero = parseInt(prompt("Hola, ingrese un número!"));
    let numeroOpuesto = `-${numero}`;
    let numeroInverso = 1 / numero;
    return console.log(numeroOpuesto + " " + numeroInverso);

}

obtenerNumOpuestoEInverso();