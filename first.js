/* TPDP ESTO ES UN COMENTATIP
    Primera clase de Typescript en Paradigmas de Programacion
    Profesor: Dabrin Najera
    Fecha: 22/08/2019
    Autor: Dabrin Najera.
*/
//Cuales palabras reservadas existen en TS para declarar alguna variable o constante?
// let, var, const
var age;
var firstName;
var lastName;
//Ahora declaramos una constante de tipo boolean
var PI = 3.1416;
//Ahora declaramos un arreglo de numeros
var arreglo;
function setAge() {
    age = 22;
}
function getAge() {
    return age;
}
function setFirstName() {
    firstName = "Jorge";
}
function getFirstName() {
    return firstName;
}
function setLastName() {
    lastName = "Lopez";
}
function getLastName() {
    return lastName;
}
function setPerson() {
    setAge();
    setFirstName();
    setLastName();
}
function getPerson() {
    return "My name is:" + getFirstName() + ""
        + getLastName() + " and I am "
        + getAge() + " years old";
}
setPerson();
console.log(getPerson());
function obtenerCircunferenciaDeUnCirculo(radio) {
    return 2 * PI * radio;
}
function mostrarResultado() {
    console.log(obtenerCircunferenciaDeUnCirculo(5));
}
mostrarResultado();
function decidirQueVoyAMostrar(valorAEvaluar) {
    var result = obtenerCircunferenciaDeUnCirculo(5);
    if (result > valorAEvaluar) {
        console.log("El resultado es mayor a " + valorAEvaluar);
    }
    else {
        console.log(":'C");
    }
}
function validarSiEsRectangulo(base, altura) {
    if (base != altura) {
        console.log("No es un cuadrado");
    }
    else {
        console.log("Es un cuadrado");
    }
}
decidirQueVoyAMostrar(40);
validarSiEsRectangulo(5, 5.000000001);
// Hola Allan aca // 