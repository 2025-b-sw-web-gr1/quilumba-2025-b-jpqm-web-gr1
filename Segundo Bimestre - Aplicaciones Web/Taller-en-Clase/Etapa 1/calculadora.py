import math

def mostrar_menu():
    print("\n--- CALCULADORA BÁSICA ---")
    print("1. Sumar (+)")
    print("2. Restar (-)")
    print("3. Multiplicar (*)")
    print("4. Dividir (/)")
    print("5. Potencia (^)") # Operación adicional
    print("6. Salir")

while True:
    mostrar_menu()
    opcion = input("Elige una opción (1-6): ")

    if opcion == '6':
        print("¡Adiós!")
        break

    if opcion in ['1', '2', '3', '4', '5']:
        try:
            # Validación de entradas: Intenta convertir a decimal
            num1 = float(input("Ingresa el primer número: "))
            num2 = float(input("Ingresa el segundo número: "))

            if opcion == '1':
                print(f"✅ Resultado: {num1 + num2}")
            elif opcion == '2':
                print(f"✅ Resultado: {num1 - num2}")
            elif opcion == '3':
                print(f"✅ Resultado: {num1 * num2}")
            elif opcion == '4':
                # Validación de división por cero
                if num2 == 0:
                    print("❌ Error: No se puede dividir por cero.")
                else:
                    print(f"✅ Resultado: {num1 / num2}")
            elif opcion == '5':
                print(f"✅ Resultado: {math.pow(num1, num2)}")
        
        except ValueError:
            # Mensaje de error claro si meten letras
            print("❌ Error: Debes ingresar solo números válidos.")
    else:
        print("⚠️ Opción no válida, intenta de nuevo.")