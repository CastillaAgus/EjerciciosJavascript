/* 6) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la 
cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 
más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo 
mensual del vendedor y mostrarlo */

function sueldoMensual() {
    let valorUnitario = parseInt(prompt("Hola, ingrese el valor unitario del producto"));
    let cantidadVendidas = parseInt(prompt("Ingrese la cantidad de articulos vendidos"));
    let totalVentas = valorUnitario * cantidadVendidas;
    console.log(`El total de ventas es ${totalVentas}`);
    let sueldoFijo = 14000;
    let comision = totalVentas * 0.16;
    console.log(`La comisión correspondiente es ${comision}`);
    let sueldo = sueldoFijo + comision;
    return console.log(`el sueldo mensual del vendedor es $ ${sueldo}`);
}
sueldoMensual();