//     1) Realizá un programa que permita al usuario ingresar su nombre. La computadora debe emitir una 
// salida con un mensaje de bienvenida que incluya el nombre ingresado. (Ver ejemplo

function saludarNombre(nombre) {
    let nombre = prompt('Hola, ingrese su nombre.');
    return console.log(`Hola! cómo estás,${nombre}?`);

}
saludarNombre();