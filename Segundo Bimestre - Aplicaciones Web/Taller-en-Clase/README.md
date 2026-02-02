# 📂 Taller No Recuperable (Taller en Clase 06/01/2026)

Este repositorio contiene la solución completa al "Taller no recuperable", dividido en tres etapas que abarcan lógica de programación, análisis de datos y comprensión de seguridad informática.

---

## 🎯 Descripción General

El taller está estructurado en tres etapas independientes que evalúan diferentes competencias técnicas:

1. **Etapa 1**: Desarrollo de lógica de programación mediante una calculadora interactiva
2. **Etapa 2**: Análisis estadístico y visualización de datos académicos
3. **Etapa 3**: Análisis de vulnerabilidades de seguridad en React Server Components

---

## 🛠️ Requisitos Previos

Para ejecutar los scripts de este proyecto, es necesario tener instalado:

- **Python 3.x**
- Librerías de análisis de datos (solo para la Etapa 2):
  ```bash
  pip install pandas matplotlib
  ```

---

## 🟢 Etapa 1: Calculadora Interactiva

### Descripción

**Archivo:** `calculadora.py`

Desarrollo de una calculadora robusta mediante interfaz de consola (CLI). El programa permite al usuario realizar operaciones matemáticas asegurando la integridad de los datos.

### Características Principales

- **Menú interactivo:** Navegación sencilla mediante opciones numéricas
- **Operaciones disponibles:**
  - ➕ Suma
  - ➖ Resta
  - ✖️ Multiplicación
  - ➗ División
  - 🔢 Potencia (operación adicional)
- **Validaciones implementadas:**
  - Control de errores si el usuario ingresa texto en lugar de números
  - Bloqueo de intentos de división por cero
  - Manejo de excepciones para entrada de datos incorrecta

### Ejecución

```bash
python calculadora.py
```

### Ejemplo de Uso

```
=== CALCULADORA CIENTÍFICA ===
1. Suma
2. Resta
3. Multiplicación
4. División
5. Potencia
6. Salir

Seleccione una opción: 1
Ingrese el primer número: 10
Ingrese el segundo número: 5
Resultado: 10 + 5 = 15
```

---

## 🔵 Etapa 2: Análisis de Datos y Estadística

### Descripción

**Archivos:** `analisis.py`, `notas.csv`

Script de Python diseñado para procesar un conjunto de datos académicos (`notas.csv`). El script realiza cálculos matemáticos, estadísticos y visualización de datos.

### Funcionalidades

1. **Cálculos Académicos**
   - Promedio de bimestres por estudiante
   - Porcentaje de nota total sobre 20 puntos

2. **Estadística Descriptiva**
   - Cálculo automático de la Media del curso
   - Cálculo de la Mediana
   - Cálculo de la Moda

3. **Valores Extremos**
   - Identificación de las notas más altas por bimestre
   - Identificación de las notas más bajas por bimestre
   - Análisis de notas totales máximas y mínimas

4. **Análisis de Sentimiento**
   - Algoritmo básico que clasifica los comentarios de los estudiantes
   - Categorías: Excelente, Bueno, Regular, Malo
   - Basado en palabras clave predefinidas

5. **Visualización de Datos**
   - Generación de gráfico de pastel (Pie Chart)
   - Distribución visual de opiniones usando `matplotlib`
   - Colores personalizados por categoría

### Estructura del Archivo CSV

```csv
Estudiante,Bimestre1,Bimestre2,Comentario
Juan Pérez,8.5,9.0,Excelente trabajo
María García,7.0,8.5,Buen desempeño
...
```

### Ejecución

```bash
python analisis.py
```

### Salida Esperada

El script generará:
- Estadísticas completas en la consola
- Archivo de gráfico: `distribucion_sentimientos.png`

### Ejemplo de Salida

```
=== ANÁLISIS DE DATOS ACADÉMICOS ===

Estadísticas Generales:
- Media del curso: 8.45
- Mediana: 8.50
- Moda: 9.00

Nota más alta: 9.8 (Bimestre 2)
Nota más baja: 6.5 (Bimestre 1)

Análisis de Sentimientos:
- Excelente: 45%
- Bueno: 35%
- Regular: 15%
- Malo: 5%

✓ Gráfico generado: distribucion_sentimientos.png
```

---

## 🔴 Etapa 3: Análisis de Seguridad (React)

### Descripción

**Archivo:** `Informe_Seguridad.pdf` (o documento de texto)

Análisis teórico sobre una vulnerabilidad crítica reportada en React Server Components (**CVE-2025-55182**).

### Puntos Clave Abordados

1. **Identificación Técnica**
   - Localización del párrafo clave que describe el fallo (Párrafo 5)
   - Contexto de la vulnerabilidad en React Server Components

2. **Explicación del Fallo**
   - Descripción detallada sobre la deserialización insegura
   - Análisis de cómo la falta de validación en los datos que viajan del cliente al servidor permite la ejecución remota de código malicioso
   - Consecuencias potenciales para aplicaciones en producción

3. **Análisis de Impacto**
   - Evaluación del riesgo de seguridad
   - Vectores de ataque posibles
   - Sistemas afectados

4. **Recomendaciones**
   - Medidas de mitigación sugeridas
   - Mejores prácticas de seguridad
   - Actualización de versiones afectadas

### Estructura del Informe

```
1. Introducción
2. Identificación de la Vulnerabilidad
3. Análisis Técnico del Fallo
4. Vectores de Ataque
5. Impacto y Consecuencias
6. Medidas de Mitigación
7. Conclusiones
8. Referencias
```

### Vulnerabilidad CVE-2025-55182

**Resumen:** Fallo de seguridad crítico en React Server Components que permite la ejecución remota de código (RCE) debido a una deserialización insegura de datos no validados provenientes del cliente.

**Severidad:** Alta/Crítica

**Componentes Afectados:** React Server Components (versiones específicas)

---

## 📁 Estructura del Proyecto

```
taller-no-recuperable/
│
├── README.md                        # Este archivo
│
├── Etapa1/
│   └── calculadora.py              # Script de calculadora interactiva
│
├── Etapa2/
│   ├── analisis.py                 # Script de análisis de datos
│   ├── notas.csv                   # Datos académicos de entrada
│   └── distribucion_sentimientos.png  # Gráfico generado (output)
│
└── Etapa3/
    └── Informe_Seguridad.pdf       # Documento de análisis de seguridad
```

---

## 🎨 Tecnologías Utilizadas

| Etapa | Tecnología | Propósito |
|-------|-----------|-----------|
| **Etapa 1** | Python 3.x | Lógica de programación y control de flujo |
| **Etapa 2** | Python + Pandas | Análisis y manipulación de datos |
| **Etapa 2** | Matplotlib | Visualización de datos estadísticos |
| **Etapa 3** | Análisis Teórico | Investigación de vulnerabilidades de seguridad |

---

## 📊 Resultados y Entregables

### Etapa 1
✅ Script funcional de calculadora con validaciones  
✅ Manejo robusto de errores  
✅ Operación adicional de potencia implementada  

### Etapa 2
✅ Análisis estadístico completo (Media, Mediana, Moda)  
✅ Identificación de valores extremos  
✅ Sistema de análisis de sentimientos  
✅ Visualización gráfica de distribución de opiniones  

### Etapa 3
✅ Identificación precisa del párrafo técnico  
✅ Explicación detallada de la vulnerabilidad CVE-2025-55182  
✅ Análisis de impacto y vectores de ataque  
✅ Recomendaciones de seguridad  

---

## 🚀 Instrucciones de Ejecución Completa

### Clonar el Repositorio

```bash
git clone https://github.com/usuario/taller-no-recuperable.git
cd taller-no-recuperable
```

### Ejecutar Etapa 1

```bash
cd Etapa1
python calculadora.py
```

### Ejecutar Etapa 2

```bash
cd Etapa2
pip install pandas matplotlib
python analisis.py
```

### Revisar Etapa 3

```bash
cd Etapa3
# Abrir el archivo PDF con tu lector preferido
open Informe_Seguridad.pdf  # macOS
xdg-open Informe_Seguridad.pdf  # Linux
start Informe_Seguridad.pdf  # Windows
```

---

## 🔍 Puntos Destacados del Desarrollo

### Etapa 1 - Buenas Prácticas
- Uso de funciones modulares para cada operación
- Implementación de try-except para manejo de errores
- Validación exhaustiva de entrada de datos
- Interfaz de usuario clara y amigable

### Etapa 2 - Análisis Avanzado
- Procesamiento eficiente de datos con Pandas
- Implementación de múltiples métricas estadísticas
- Algoritmo de clasificación de sentimientos basado en NLP básico
- Visualización profesional con personalización de colores

### Etapa 3 - Análisis de Seguridad
- Investigación detallada de vulnerabilidad real
- Comprensión profunda de conceptos de seguridad
- Análisis crítico de impacto en sistemas productivos
- Propuesta de soluciones viables

---

## 📚 Conceptos Clave Aplicados

### Programación
- Control de flujo (if-else, while)
- Manejo de excepciones (try-except)
- Funciones y modularización
- Validación de datos de entrada

### Análisis de Datos
- Estadística descriptiva
- Procesamiento de archivos CSV
- Visualización de datos
- Análisis de sentimientos básico

### Seguridad Informática
- Vulnerabilidades web
- Deserialización insegura
- Ejecución remota de código (RCE)
- Análisis de CVE

---

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte de las actividades académicas del curso de **Aplicaciones Web GR1SW** en la **Escuela Politécnica Nacional**.

**Tipo de Evaluación:** Taller No Recuperable  
**Modalidad:** Individual  
**Duración:** 3 etapas secuenciales  

---

## 👨‍💻 Autor

**Joel Quilumba**  
Estudiante de Ingeniería en Computación  
Escuela Politécnica Nacional - Aplicaciones Web GR1SW

---

## 📌 Notas Importantes

- **Etapa 1**: La calculadora incluye una operación adicional (potencia) más allá de las básicas requeridas
- **Etapa 2**: El análisis de sentimientos utiliza un diccionario de palabras clave que puede ser ampliado
- **Etapa 3**: El análisis se basa en información pública del CVE oficial y documentación técnica
- Todos los scripts incluyen comentarios explicativos para facilitar la comprensión del código

---

## 🔧 Solución de Problemas

### Error: Module 'pandas' not found
```bash
pip install pandas matplotlib
```

### Error: Permission denied al ejecutar script
```bash
chmod +x calculadora.py
chmod +x analisis.py
```

### Error: Encoding del archivo CSV
Si el archivo `notas.csv` presenta problemas de codificación, modificar en `analisis.py`:
```python
df = pd.read_csv('notas.csv', encoding='utf-8')
# o
df = pd.read_csv('notas.csv', encoding='latin-1')
```

---

## 📄 Licencia

Proyecto académico desarrollado con fines educativos.

---
