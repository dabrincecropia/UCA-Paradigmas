/* Prueba Asincrónica
     Typescript en Paradigmas de Programacion
    Profesor: Dabrin Najera
    Fecha: 05/02/2024
    Autor: Greivin González
*/

//Calcular el Área de un Cuadrado//

// Definición de la longitud del lado del cuadrado (valor fijo)
const ladoDelCuadrado: number = 7;

// Cálculo del área del cuadrado
const areaDelCuadrado: number = ladoDelCuadrado * ladoDelCuadrado;

// Mostrar el resultado
console.log(`El área del cuadrado con lado ${ladoDelCuadrado} es: ${areaDelCuadrado}`);


//Calcular el Perímetro de un Rectángulo//

// Definición de las longitudes de los lados del rectángulo
const longitudLadoA: number = 5; 
const longitudLadoB: number = 10; 

// Cálculo del perímetro del rectángulo
const perimetroRectangulo: number = 2 * (longitudLadoA + longitudLadoB);

// Mostrar el resultado
console.log(`El perímetro del rectángulo con lados ${longitudLadoA} y ${longitudLadoB} es: ${perimetroRectangulo}`);


//Calcular el Área de un Triángulo//


// Definición de la base y la altura del triángulo
const baseTriangulo: number = 8; 
const alturaTriangulo: number = 5; 

// Cálculo del área del triángulo
const areaTriangulo: number = 0.5 * baseTriangulo * alturaTriangulo;

// Mostrar el resultado
console.log(`El área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${areaTriangulo}`);


//Calcular la Longitud de la Circunferencia//

// Definición del radio de la circunferencia
const radioCircunferencia: number = 8; 

// Cálculo de la longitud de la circunferencia
const longitudCircunferencia: number = 2 * Math.PI * radioCircunferencia;

// Mostrar el resultado
console.log(`La longitud de la circunferencia con radio ${radioCircunferencia} es: ${longitudCircunferencia}`);


//Calcular el Área de un Círculo//

// Definición del radio del círculo
const radioCirculo: number = 6; 

// Cálculo del área del círculo
const areaCirculo: number = Math.PI * radioCirculo * radioCirculo;

// Mostrar el resultado
console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo}`);
