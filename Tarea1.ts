//Tarea 1, semana 5 
//Joselyn Solano Monge

class CalculadoraGeometrica {
    // Bloque de variables de todas las figuras
    private ladoCuadrado: number = 5;
    private longitudRectangulo: number = 4;
    private anchoRectangulo: number = 6;
    private baseTriangulo: number = 8;
    private alturaTriangulo: number = 5;
    private radioCircunferencia: number = 3;
    private radioCirculo: number = 4;

    // Bloque de funciones de operación
    private calcularAreaCuadrado(lado: number): number {
        return lado * lado;
    }

    private calcularPerimetroRectangulo(longitud: number, ancho: number): number {
        return 2 * (longitud + ancho);
    }

    private calcularAreaTriangulo(base: number, altura: number): number {
        return (base * altura) / 2;
    }

    private calcularLongitudCircunferencia(radio: number): number {
        return 2 * Math.PI * radio;
    }

    private calcularAreaCirculo(radio: number): number {
        return Math.PI * radio * radio;
    }

    // Bloque de funciones de mostrar y llamar resultados
    public mostrarResultados(): void {
        console.log("Resultados:");
        console.log("Área del Cuadrado: " + this.calcularAreaCuadrado(this.ladoCuadrado));
        console.log("Perímetro del Rectángulo: " + this.calcularPerimetroRectangulo(this.longitudRectangulo, this.anchoRectangulo));
        console.log("Área del Triángulo: " + this.calcularAreaTriangulo(this.baseTriangulo, this.alturaTriangulo));
        console.log("Longitud de la Circunferencia: " + this.calcularLongitudCircunferencia(this.radioCircunferencia));
        console.log("Área del Círculo: " + this.calcularAreaCirculo(this.radioCirculo));
    }
}

// Muestra de resultados
let calculadora = new CalculadoraGeometrica();
calculadora.mostrarResultados();
