import pandas as pd
import matplotlib.pyplot as plt

# 1. Cargar datos
df = pd.read_csv('notas.csv')

# 2. Cálculos básicos
# Promedio de las dos notas
df['Promedio'] = (df['NotaPrimerBimestre'] + df['NotaSegundoBimestre']) / 2
# Porcentaje sobre 20
df['Porcentaje'] = (df['NotaTotal'] / 20) * 100

# 3. Mostrar Estadísticas en Consola
print("-" * 30)
print("📊 ESTADÍSTICAS DEL CURSO")
print("-" * 30)
print(f"Media (Promedio Total): {df['NotaTotal'].mean():.2f}")
print(f"Mediana: {df['NotaTotal'].median()}")
print(f"Moda: {df['NotaTotal'].mode()[0]}")

print("\n📈 NOTAS EXTREMAS")
print(f"Nota más ALTA (Total): {df['NotaTotal'].max()}")
print(f"Nota más BAJA (Total): {df['NotaTotal'].min()}")
print(f"Mejor 1er Bimestre: {df['NotaPrimerBimestre'].max()}")
print(f"Peor 1er Bimestre: {df['NotaPrimerBimestre'].min()}")

# 4. Análisis de Sentimiento (Básico)
def analizar_comentario(texto):
    t = texto.lower()
    if 'excelente' in t or 'encantó' in t or 'muy buena' in t: return 'Excelente'
    if 'buena' in t or 'agradó' in t or 'gustó' in t: return 'Bueno'
    if 'normal' in t or 'neutral' in t or 'regular' in t: return 'Normal'
    if 'confuso' in t or 'no entendí' in t or 'no me gustó' in t: return 'Malo'
    return 'Normal'

df['Categoria'] = df['ComentarioEstudiante'].apply(analizar_comentario)

# 5. Generar Gráfico de Pastel
conteo = df['Categoria'].value_counts()
plt.figure(figsize=(8, 8))
plt.pie(conteo, labels=conteo.index, autopct='%1.1f%%', colors=['#ff9999','#66b3ff','#99ff99','#ffcc99'])
plt.title('Opiniones de los Estudiantes')
plt.show()