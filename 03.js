//3) Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres 
//distintos para cierto alumno. La computadora debe mostrar la nota promedio. (Ver ejemplo)
let cant;
let sumNotas = 0;
let promedio;
let notas;

function promedioNotas() {
    cant = parseInt(prompt("Ingrese cantidad de notas"));
    while (cant <= 0) {
        cant = parseInt(prompt(`${cant} es un número incorrecto.Ingrese cantidad de notas`));

    };

    for (i = 1; i <= cant; i++) {
        notas = parseInt(prompt(`Ingresa la nota n°${i}`));

        while (notas < 0) {
            notas = parseInt(prompt(`Error! ${notas} no es un número válido. Ingresa la nota n°${i}`));
        };
        sumNotas = sumNotas + notas;
    };

    promedio = sumNotas / cant;
    return console.log(`El promedio es ${promedio}`);
}
promedioNotas();