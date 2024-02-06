/*Este es un trabajo realizado por Diego Andrés Solano Astúa
para el profesor Dabrin Najera Barboza en la asignatura de Paradigmas y
Pruebas de Software
*/
/* Apartado de variables a realizar para Obtener y mostrar
el calculo de las áreas y perimetros solicitados */
//Variable para el lado de un cuadrado utilizada en formula de área.
var lado;
/*Variable ancho y largo que se utilizaran para el perimetro de un rectangulo*/
var ancho;
var largo;
/*Variable base y altura que se utilizaran para el perimetro de un triangulo */
var altura;
var base;
/*Valor del Radio para el area y longitud del circulo*/
var radio;
//Ahora declaramos una constante de tipo boolean para el valor PI
var PI = 3.1416;
/* Apartado de funciones a realizar para Obtener el calculo de las áreas y perimetros solicitados */
//Calculo de area de un cuadrado
/*Está función es realizada con el objetivo de obtener el cálculo del área de un cuadrado
ya que un cuadrado tiene todos sus lados iguales para sacar su área haré un cálculo de lado * lado*/
function obtenerAreaCuadrado(lado) {
    return lado * lado;
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
//Calculo de Perimetro de un Rectangulo
/*Está función es realizada con el objetivo de obtener el cálculo del perimetro de un rectangulo
 para sacar su área haré un cálculo de lado + ancho + lado + ancho */
function obtenerPerimetroRectangulo(largo, ancho) {
    return largo + ancho + largo + ancho;
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*Está función es realizada con el objetivo de obtener el cálculo del area de un triangulo
 para sacar su área haré un cálculo de (base * altura)/2*/
function obtenerAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*Está función es realizada con el objetivo de obtener el cálculo del longitud de circunferencia
para sacar su área haré un cálculo de 2* PI * RADIO */
function obtenerLongitudCircunferenciaCirculo(radio) {
    return 2 * PI * radio;
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*Está función es realizada con el objetivo de obtener el cálculo del longitud de circunferencia
para sacar su área haré un cálculo de PI * (RADIO*RADIO) */
function obtenerAreaCirculo(radio) {
    return PI * radio * radio;
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/* Apartado de funciones a realizar para Mostrar el calculo de las áreas y perimetros solicitados */
/* Está función es realizada con el objetivo de mostrar el resultado del área de un cuadrado, en este
   caso tomará un valor determinado como 10 y el resultado del mismo serán 100*/
function mostrarResultadoCuadrado() {
    console.log('Mostrar Area Cuadrado: ' + obtenerAreaCuadrado(10));
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/* Está función es realizada con el objetivo de mostrar el resultado del perimetro de rectangulo, en este
    caso tomará un valor determinado como largo 4 y ancho 5 y el resultado del mismo serán 18*/
function mostrarResultadoRectangulo() {
    console.log('Mostrar Perimetro Rectangulo: ' + obtenerPerimetroRectangulo(4, 5));
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/* Está función es realizada con el objetivo de mostrar el resultado del área de un triangulo, en este
    caso tomará un valor determinado como 4 base y 5 altura y el resultado del mismo serán 10*/
function mostrarResultadoTriangulo() {
    console.log('Mostrar Area Triangulo: ' + obtenerAreaTriangulo(4, 5));
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/* Está función es realizada con el objetivo de mostrar el resultado del la longitud de la
circunferencia de un circulo, en estecaso tomará un valor determinado como 31.416
*/
function mostrarResultadosLongitudCircunferencia() {
    console.log('Mostrar Resultado Longitud Circulo: ' + obtenerLongitudCircunferenciaCirculo(5));
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/* Está función es realizada con el objetivo de mostrar el resultado del area de un circulo
, en estecaso tomará un valor determinado como 78.54
*/
function mostrarResultadosAreaCircunferencia() {
    console.log('Mostrar Resultado Area Circulo: ' + obtenerAreaCirculo(5));
}
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------*/
//LLamado de cada función de visualización
mostrarResultadoCuadrado();
mostrarResultadoRectangulo();
mostrarResultadoTriangulo();
mostrarResultadosLongitudCircunferencia();
mostrarResultadosAreaCircunferencia();
