# Calcule el area de un circulo

import math

print("Escriba el radio de un circulo")

Radio = float(input()) #capturando el radio
Area = math.pi * (Radio * Radio)

print("El Area del circulo con Radio ",Radio,"Es: ",Area)


# Calcule el perimetro del rectangulo

Base = float(input("base: "))
Altura = float(input("altura: "))
perimetro = 2 * Base + 2 * Altura

print(f'{perimetro} cm')


# Calcule la longitud de una circunferencia

import math

Radio = float(input("Radio -> " ))

Area = math.pi  * Radio**2

Longitud = 2 * math.pi * Radio

print(f"El Area es: {Area: .2f}")
print(f"La Longitud de la circunferencia es: {Longitud: .2f}")


#Calcule el area de un cuadrado

Lado=int(input("Digite la medida de el lado de un cuadrado"))
         
area= Lado*Lado

print("El area de un cuadrado es: ")
print(area)


#Calcule el area de un triangulo

Base = int(input("Escribir la base del triangulo: "))
Altura = int(input("Escribir la altura del triangulo"))

Area = (Base * Altura) / 2
print ("El area de un triangulo es:" , Area, "cm²") # alt +  253