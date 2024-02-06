///Declaracion de variables para los calculos siguientes //

lado = 10;
longitud = 10;
ancho = 15;
base = 5;
altura = 10;
radio = 20;
pi = 3.14

// Funciones de operacion //

function AreaCuadrado(lado) {
    return lado * lado;
}

function PerimetroRectangulo (longitud,ancho){
    return longitud *2 +ancho *2;
}

function AreaTriangulo (base,altura) {
    return (base*altura)/2;
}

function LongitudCircunferencia (pi,radio) {
    return (2*pi) * radio;
}


function AreaCirculo (pi,radio) {
    return pi*(radio*2);
}

// Funciones de mostrar resultados //

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