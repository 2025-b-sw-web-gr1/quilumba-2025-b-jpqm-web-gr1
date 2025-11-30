# Taller 07 - Motor de Renderizado

## 1. Informe del Taller: Análisis del Motor de Renderizado

---

### A. ¿Por qué elegí Handlebars (HBS)?

Elegí Handlebars porque es una de las alternativas más robustas y profesionales en el ecosistema JavaScript.  
Su principal filosofía es ser **"logic-less"** (sin lógica compleja en la vista), lo que promueve una arquitectura más limpia al forzar la separación entre la lógica de negocio (Backend) y la interfaz de usuario (Frontend). Además, utiliza una sintaxis basada en HTML muy legible.

---

### B. Diferencias encontradas respecto a EJS

| Característica | EJS (Embedded JavaScript) | Handlebars (HBS) |
|----------------|---------------------------|------------------|
| **Sintaxis** | Utiliza etiquetas tipo PHP: `<% %>`, `<%= %>`. | Utiliza llaves dobles (Mustache): `{{ }}`, `{{#if}}`. |
| **Lógica en Vista** | Permite escribir JavaScript nativo y complejo (for, while, declaraciones). | Restringido. No permite JS arbitrario; usa "helpers" (#each, #if). |
| **Legibilidad** | Puede volverse desordenado si se mezcla mucha lógica con HTML. | Mantiene el HTML limpio y semántico. |
| **Cierre de Bloques** | Se cierran con llaves JS: `<% } %>`. | Se cierran con el nombre del helper: `{{/if}}`. |

---

### C. Ventajas y Desventajas observadas

#### ✅ Ventajas:
- **Código limpio:** Al restringir la lógica, las plantillas (.hbs) son mucho más fáciles de leer y mantener.
- **Seguridad:** Reduce la posibilidad de introducir errores de ejecución complejos en la capa de presentación.
- **Separación de Responsabilidades:** Obliga al desarrollador a procesar los datos en el servidor antes de enviarlos a la vista.

#### ❌ Desventajas:
- **Menor flexibilidad inmediata:** No se pueden realizar cálculos rápidos o condiciones complejas directamente en la vista (requiere helpers personalizados).
- **Curva de aprendizaje:** Requiere aprender la sintaxis específica de los bloques de Handlebars en lugar de reutilizar JavaScript estándar.

---
Proyecto web desarrollado en Node.js que renderiza una guía interactiva de cuidados para mascotas. Este proyecto cumple con el objetivo del taller de utilizar un motor de renderizado distinto a EJS, implementando **Handlebars (HBS)** junto con **Bootstrap 5** para el diseño.

---

## 2. Ejecución del Taller

Para iniciar el servidor web, ejecuta el siguiente comando en la terminal:

```bash
node app.js
```

Una vez que aparezca el mensaje en la consola, abre tu navegador en:

👉 **http://localhost:3000**

---

## 3. Estructura del Proyecto

```plaintext
/
├── public/              
│   └── images/          # Carpeta de archivos estáticos (imágenes)
├── views/               
│   └── home.hbs         # Vista principal usando sintaxis Handlebars
├── app.js               # Servidor Express y configuración del motor
├── package.json         # Dependencias del proyecto
└── README.md            # Documentación e Informe
```

---
