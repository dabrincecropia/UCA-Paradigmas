//Tarea 1 - Semana 5
// Estudiante: Joselyn Solano Monge
// Definir constantes para las dimensiones de las figuras geométricas
var ladoCuadrado = 10;
var longitudRectangulo = 4;
var anchoRectangulo = 6;
var baseTriangulo = 8;
var alturaTriangulo = 5;
var radioCircunferencia = 3;
var radioCirculo = 4;
// Definir funciones para calcular el área y perímetro de las figuras geométricas
function calcularAreaCuadrado(lado) {
    return lado * lado;
}
function calcularPerimetroRectangulo(longitud, ancho) {
    return 2 * (longitud + ancho);
}
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function calcularLongitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
}
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}
// Definir función para mostrar resultados
function mostrarResultados() {
    console.log("Tarea 1, Semana 5, Joselyn Solano Monge");
    console.log("Resultados:");
    console.log("Área del Cuadrado: " + calcularAreaCuadrado(ladoCuadrado));
    console.log("Perímetro del Rectángulo: " + calcularPerimetroRectangulo(longitudRectangulo, anchoRectangulo));
    console.log("Área del Triángulo: " + calcularAreaTriangulo(baseTriangulo, alturaTriangulo));
    console.log("Longitud de la Circunferencia: " + calcularLongitudCircunferencia(radioCircunferencia));
    console.log("Área del Círculo: " + calcularAreaCirculo(radioCirculo));
}
// Llamar la función para mostrar resultados
mostrarResultados();
