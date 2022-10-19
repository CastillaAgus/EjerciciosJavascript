/* 4) Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la 
cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal, 
asumiendo que trabaja todos los días hábiles y media jornada los sábados. */

let valorHora = parseInt(prompt("Hola! Ingrese el valor de la hora de trabajo"));
let horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas por día"));
let jornadaSemanal;
let salarioActual;


function salario() {
    jornadaSemanal = (horasTrabajadas * 5) + (horasTrabajadas / 2);
    salarioActual = valorHora * jornadaSemanal;
    return console.log(`El salario semanal correspondiente es ${salarioActual}`);
}

salario();