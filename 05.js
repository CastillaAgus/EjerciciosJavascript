 /* 5) Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a
      y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar 
      entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas.*/

 function intercambiarValores() {

     let a = prompt("Ingrese el valor A");
     let b = prompt("Ingrese el valor B");
     let c;
     console.log(`el valor A es ${a} y el valor de B es ${b}`);
     console.log("los valores intercambiados");
     c = a;
     a = b;
     b = c;
     console.log(`el valor A es ${a} y el valor de B es ${b}`);

 }
 intercambiarValores();