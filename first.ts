/* TODO ESTO ES UN COMENTATIP
    Primera clase de Typescript en Paradigmas de Programacion
    Profesor: Dabrin Najera
    Fecha: 22/08/2019
    Autor: Dabrin Najera.
*/

//Cuales palabras reservadas existen en TS para declarar alguna variable o constante?
// let, var, const
var age:number;
var firstName:string;
var lastName:string;


//Ahora declaramos una constante de tipo boolean
const PI:number = 3.1416;

//Ahora declaramos un arreglo de numeros
var arreglo:number[];

function setAge(){
    age = 22;
}
function getAge():number{
    return age;
}
function setFirstName(){
    firstName = "Jorge";
}
function getFirstName():string{
    return firstName;
}
function setLastName()
{
    lastName = "Lopez";
}
function getLastName():string{
    return lastName;
}
function setPerson(){
    setAge();
    setFirstName();
    setLastName();
}
function getPerson():string{
    return "My name is:" + getFirstName() + ""
    + getLastName() + " and I am "
    + getAge() + " years old";
}
setPerson();
console.log(getPerson());
function obtenerCircunferenciaDeUnCirculo(radio:number):number{
    return 2 * PI * radio;
}
function mostrarResultado(){
    console.log(obtenerCircunferenciaDeUnCirculo(5));
}
mostrarResultado();

function decidirQueVoyAMostrar(valorAEvaluar:number){
    let result=obtenerCircunferenciaDeUnCirculo(5);
    if(result>valorAEvaluar){
        console.log("El resultado es mayor a "+ valorAEvaluar);
    }else {
        console.log(":'C");
    }
}

function validarSiEsRectangulo(base:number,altura:number){
    if(base!=altura){
        console.log("No es un cuadrado");
    }else{
        console.log("Es un cuadrado");
    }
}

decidirQueVoyAMostrar(40);
validarSiEsRectangulo(5,5.000000001);

// Allan Allan Allan Allan Allan
