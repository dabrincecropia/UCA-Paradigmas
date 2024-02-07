#Calcular el area de un cuadrado      area = lado * lado

lado = input("Ingresa uno de los lados del cuadrado: ")
lado = float(lado)
area = lado * lado
print(f"El area del cuadrado es: {area} cm")



#Calcular el Perímetro de un Rectangulo   PerÍmetro = 2 * lado A + 2 * lado B

ladoa = float(input("Lado A: "))
ladob = float(input("Lado B: "))

perimetro = 2*ladoa + 2*ladob

print("El valor del perimetro es:", perimetro)



#Calcular el Área de un Triángulo 

base = None
altura = None

while True:
    try:
        base = float(input("Escriba la base del triángulo: "))
        break
    except:
        print("Debe escribir un número ")

while True:
    try:
        altura = float(input("Escriba la altura del triángulo: "))
        break
    except:
        print("Debe escribir un número ")

area = base * altura / 2

print("El area del triangulo es igual: {}".format(area))



# Calcular Longitud de una Circunferencia 

import math

radio = float(input("radio -> "))

longitud = 2 * math.pi * radio

print(f"La longitud de la circunferencia es: {longitud:.2f}")



# Calcular el Área de un Círculo   Area = Pi * radio ** 2

radio = float(input("Escriba el radio del circulo"))

Pi = 3.1416

area = Pi * radio ** 2

print("El area del circulo es: "+str(area))