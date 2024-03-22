///Declaracion de variables para los calculos siguientes, estas son las variables que vamos a utilizar con valores ya declarados para las siguientes funciones ///

lado = 10;
longitud = 10;
ancho = 15;
base = 5;
altura = 10;
radio = 20;
pi = 3.14

// Funciones de operacion, aqui indicamos las funciones de cada una de las operaciones//

// Operacion Area de un Cuadrado //

function AreaCuadrado(lado) {
    return lado * lado;
}

// Operacion Perimetro de un rectangulo //

function PerimetroRectangulo (longitud,ancho){
    return longitud *2 +ancho *2;
}

// Operacion Area de un Triangulo //

function AreaTriangulo (base,altura) {
    return (base*altura)/2;
}

// Operacion longitud de la circunferencia //

function LongitudCircunferencia (pi,radio) {
    return (2*pi) * radio;
}

// Operacion area de un circulo //


function AreaCirculo (pi,radio) {
    return pi*(radio*2);
}

// Funciones de mostrar resultados, aqui llamamos mediante el console log las funciones anteriormente realizadas para mostrar los resultados //

// Calcular el Area de un Cuadrado //

console.log(AreaCuadrado(lado));

// Calcular el Perimetro de un Rectangulo //

console.log(PerimetroRectangulo(longitud,ancho));

// Calcular el area de un triangulo //

console.log(AreaTriangulo(base,altura));

// Calcular la Longitud de la Circunferencia //

console.log(LongitudCircunferencia(pi,radio));

// Calcular el area del Circulo //

console.log(AreaCirculo(pi,radio));