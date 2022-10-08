//región
const nacimiento = "10 de Diciembre del 2004";
const apellido = `Britos`;
var nombre = 'Gabriel';
var materias = "Todas"
let curso = `5to 4ta`;
let a = 5;
let b = 10;
let c = 15;
let d = 20;
let e = 25;
let f = 30;
let g = 35;
let h = 40;
let estaciones = [`Verano`, `Otoño`, `Invierno`, `Primavera`]
let usuario = { nombre, apellido, nacimiento, edad: `17`, estacionFavorita: `Verano`, materiaFavorita: `Programación Web` }

//Funciones
function sumarNumeros(numero1, numero2) {
    let sumaTotal = numero1 + numero2;
    //console.log(sumaTotal);
    console.log(`${numero1} + ${numero2} = ${sumaTotal}`);
}

function restarNumeros(numero1, numero2) {
    let sumaTotal = numero1 - numero2;
    console.log(`${numero1} - ${numero2} = ${sumaTotal}`);
}

function multiplicarNumeros(numero1, numero2) {
    let sumaTotal = numero1 * numero2;
    console.log(`${numero1} * ${numero2} = ${sumaTotal}`);
}

function dividirNumeros(numero1, numero2) {
    let sumaTotal = numero1 / numero2;
    console.log(`${numero1} / ${numero2} = ${sumaTotal}`);
}

//endregión
console.log(`Nombre: ${nombre}`);
console.log(`Apellido: ${apellido}`);
console.log(`Fecha de nacimiento: ${nacimiento}`);
console.log(`Curso: ${curso}`);
console.log(`Materias aprobadas: ${materias}`);

console.log("Calculos matematicos: ");
sumarNumeros(a, b);
restarNumeros(c, d);
multiplicarNumeros(e, f);
dividirNumeros(g, h);

console.log("Estaciones del año: ");
for (cont = 0; cont <= 3; cont++) {
    console.log(estaciones[cont]);
}

console.log("Datos del usuario: ");
console.log(usuario)