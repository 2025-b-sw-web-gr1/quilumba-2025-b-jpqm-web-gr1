# Quilumba-2025-b-jpqm-web-gr1

## 👤 Información del Estudiante
**Joel Patricio Quilumba Morocho**  
Aplicaciones Web - GR1SW  
Ingeniería de Sistemas - Computación  
Escuela Politécnica Nacional (2025-B)   

---

## 📚 Descripción

Este repositorio contiene todas las prácticas, talleres, exámenes y proyectos desarrollados durante el curso de Aplicaciones Web. El contenido está organizado por bimestres e incluye ejemplos de HTML, CSS, JavaScript, Single Page Applications (SPA), servicios REST, documentación de APIs y más.

---

## 📂 Estructura del Repositorio

```
📦 QUILUMBA-2025-B-JPQM-WEB-GR1
├── 📁 Primer Bimestre - Aplicaciones Web
│   ├── 00-html
│   ├── 01-server
│   ├── 02-SPA
│   ├── 03-CSS
│   ├── 06-Taller_W3C
│   ├── 07-Motor_de_Renderizado
│   ├── 08-Clase
│   ├── Educacion-html
│   ├── Examen-01
│   ├── Proyecto-01
│   └── Tarea01-Uso_de_grillas_o_flexbox
│
├── 📁 Segundo Bimestre - Aplicaciones Web
│   ├── Examen-Web-001
│   └── Proyecto-001
│
└── 📄 README.md
```

---

## 📖 Contenido por Bimestre

### 🎯 Primer Bimestre

#### 📁 **`00-html`**  
Estructura semántica básica y ejemplos fundamentales de HTML.

#### 📁 **`01-server`**
- **Motor:** EJS (Embedded JavaScript)  
- **Características:** Renderizado dinámico de vistas (`views/cat.ejs`)

#### 📁 **`02-SPA`**
- **Tecnología:** Vite + Vanilla JS  
- **Proyecto:** "spa-gatito" con manejo de estado simple (counter) y assets

#### 📁 **`03-CSS`**  
Estrategias de carga de estilos: dinámicos, externos e importados

#### 📁 **`06-Taller_W3C`**
- **Enfoque:** Implementación de estándares W3C  
- **Temática:** Maquetación gaming (Elden Ring, Valorant, etc.)

#### 📁 **`07-Motor_de_Renderizado`**
- **Motor:** Handlebars (`hbs`)  
- **Implementación:** Servidor Express con parciales y layouts (`home.hbs`)

#### 📁 **`08-Clase`**
- **Herramienta:** Suite de pruebas en Bruno  
- **Operaciones:** CRUD completo de Posts, Albums, Photos, Todos y Users

#### 📁 **`Educacion-html`**
Sitio web educativo con estructura semántica HTML

#### 📁 **`Examen-01`**
- **Especificación:** Definición de API con OpenAPI/Swagger  
- **Archivo:** `swagger.yaml`

#### 📁 **`Proyecto-01`**
- **Sistema:** E-commerce (Gestión de Productos y Categorías)  
- **Documentación:** `store-api.yaml`  
- **Testing:** Suite completa de Bruno (`create-product`, `get-products-filtered`, etc.)

#### 📁 **`Tarea01-Uso_de_grillas_o_flexbox`**
- **Objetivo:** Réplica de interfaz web  
- **Sitio replicado:** `www.x.com`  
- **Técnicas:** CSS Grid y Flexbox

---

### 🎯 Segundo Bimestre

#### 📁 **`Examen-Web-001`**
- **Tema:** Implementación de API RESTful con NestJS
- **Base de datos:** SQLite con TypeORM
- **Arquitectura:** Relación 1 a muchos (Team → Players)
- **Endpoints:** CRUD completo para Teams y Players
- **Características:**
  - Gestión de equipos (crear, leer, actualizar, eliminar)
  - Gestión de jugadores vinculados a equipos
  - Consulta de jugadores por equipo específico
  - Configuración de entidades y relaciones con TypeORM

#### 📁 **`Proyecto-001`**
- **Tema:** Documentación de API con Swagger/OpenAPI
- **Base:** Extensión del Examen-Web-001
- **Tecnología:** @nestjs/swagger + swagger-ui-express
- **Características:**
  - Documentación automática de endpoints
  - Decoradores en controladores y DTOs
  - Interfaz interactiva Swagger UI en `/api`
  - Especificación OpenAPI completa
  - Ejemplos de uso y respuestas documentadas

> **Nota:** Los trabajos del segundo bimestre corresponden al período desde enero de 2026 en adelante.

---

## 🚀 Cómo usar este repositorio

### ⚙️ Abrir páginas HTML en Windows

```powershell
# Navegar a la carpeta del bimestre correspondiente
cd "Primer Bimestre - Aplicaciones Web"

# Abrir archivo HTML
Start-Process .\00-html\index.html
```

### ⚙️ Ejecutar proyectos Node.js

```powershell
# Navegar al proyecto específico
cd "Primer Bimestre - Aplicaciones Web/02-SPA"

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### ⚙️ Testing de APIs con Bruno

1. Instalar [Bruno](https://www.usebruno.com/)
2. Abrir la carpeta del proyecto correspondiente:
   - `Primer Bimestre/08-Clase`
   - `Primer Bimestre/Proyecto-01`
   - `Segundo Bimestre/Proyecto-001`
3. Ejecutar los requests según sea necesario

### ⚙️ Trabajar con motores de renderizado

```powershell
# Para proyectos con EJS
cd "Primer Bimestre - Aplicaciones Web/01-server"
npm install
npm start

# Para proyectos con Handlebars
cd "Primer Bimestre - Aplicaciones Web/07-Motor_de_Renderizado"
npm install
npm start
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- HTML5 semántico
- CSS3 (Grid, Flexbox)
- JavaScript (Vanilla JS, ES6+)
- Vite (Build tool)

### Backend
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- Handlebars (hbs)

### API & Testing
- OpenAPI/Swagger
- Bruno (API Testing)
- REST APIs

### Desarrollo
- Git & GitHub
- npm/npx
- PowerShell

---

## 📅 Cronología

| Período | Bimestre | Contenido |
|---------|----------|-----------|
| 2025-B (Hasta Dic 2025) | Primer Bimestre | Fundamentos Web, SPA, CSS, APIs REST |
| Ene 2026 en adelante | Segundo Bimestre | Proyectos avanzados y evaluaciones |

---

## 👨‍💻 Autor

**Joel Patricio Quilumba Morocho**  
Estudiante de Ingeniería en Computación - 6to Semestre  
Escuela Politécnica Nacional - 2025-B

📧 Contacto disponible a través de la plataforma académica  
🎓 Grupo: GR1SW

---

## 📝 Notas Importantes

- ✅ Este repositorio se actualiza continuamente con nuevas prácticas y proyectos
- 📌 Los trabajos están organizados cronológicamente por bimestres
- 🔄 La estructura facilita la navegación y revisión del progreso académico
- 💡 Cada carpeta incluye su propia documentación específica cuando es necesario

---

## 📊 Progreso del Curso

### Primer Bimestre ✅
- [x] Fundamentos de HTML
- [x] CSS y Layout (Grid/Flexbox)
- [x] JavaScript y SPA
- [x] Motores de renderizado (EJS, Handlebars)
- [x] APIs REST y documentación
- [x] Testing con Bruno
- [x] Proyecto integrador

### Segundo Bimestre 🔄
- [x] Examen Web 001
- [x] Proyecto 001
---

<div align="center">

**Escuela Politécnica Nacional**  
*Innovación y Excelencia Académica*

</div>