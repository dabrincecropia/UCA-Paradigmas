//Variables y constante fundamentales

var lado_cuadrado: number;
var base_rectangulo: number;
var altura_rectangulo: number;
var base_triangulo: number;
var altura_triangulo: number;
var radio_circulo: number;

const pi = 3.1416;

//Asignación de valores numéricos a las variables anteriores

lado_cuadrado = 0;
base_rectangulo = 0;
altura_rectangulo = 0;
base_triangulo = 0;
altura_triangulo = 0;
radio_circulo = 0;

//Cálculo del área de un cuadrado
//Función con la operación e indicación necesaria
function area_cuadrado(){
    var resultado_area_cuadrado = lado_cuadrado * lado_cuadrado;
    console.log('El área del cuadrado es: ' + resultado_area_cuadrado);
}
//Llamado de la función para ser mostrada
area_cuadrado()

//Las funciones y llamados a partir de aquí tienen la misma lógica, solo cambian las fórmulas matemáticas
//Cálculo del perímetro de un rectángulo

function perimetro_rectangulo(){
    var resultado_perimetro_rectangulo = base_rectangulo * 2 + altura_rectangulo * 2;
    console.log('El perímetro del rectángulo es: ' + resultado_perimetro_rectangulo);
}
perimetro_rectangulo()

//Cálculo del área de un triángulo

function area_triangulo(){
    var resultado_area_triangulo = base_triangulo * altura_triangulo / 2;
    console.log('El área del triángulo equivale a: ' + resultado_area_triangulo);
}
area_triangulo()

//Cálculo de la longitud de una circunferencia

function longitud_circunferencia(){
    var resultado_longitud_circulo = 2 * pi * radio_circulo;
    console.log('La longitud de la circunferencia equivale a: ' + resultado_longitud_circulo);
}
longitud_circunferencia()

//Cálculo del área de un círculo

function area_circulo(){
    var resultado_area_circulo = pi * (radio_circulo * radio_circulo);
    console.log('El área del círculo equivale a: ' + resultado_area_circulo);
}
area_circulo()