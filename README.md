# Quilumba-2025-b-jpqm-web-gr1

<div align="center">

![Escuela Politécnica Nacional](https://img.shields.io/badge/EPN-Aplicaciones%20Web-blue?style=for-the-badge)
![Semestre](https://img.shields.io/badge/Semestre-2025--B-green?style=for-the-badge)
![Grupo](https://img.shields.io/badge/Grupo-GR1SW-orange?style=for-the-badge)

</div>

---

## 👤 Información del Estudiante

**Joel Patricio Quilumba Morocho**  
📚 Aplicaciones Web - GR1SW  
💻 Ingeniería en Sistemas - Computación (6to Semestre)  
🏛️ Escuela Politécnica Nacional (2025-B)

---

## 📚 Descripción

Este repositorio contiene todas las prácticas, talleres, exámenes y proyectos desarrollados durante el curso de **Aplicaciones Web**. El contenido está organizado por bimestres e incluye ejemplos de HTML, CSS, JavaScript, Single Page Applications (SPA), servicios REST, documentación de APIs, bases de datos relacionales, autenticación, internacionalización y más.

---

## 📂 Estructura del Repositorio

```
📦 QUILUMBA-2025-B-JPQM-WEB-GR1
│
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
│   ├── Clase-010
│   ├── Clase-011
│   ├── Clase-012
│   ├── Taller-en-Clase
│   ├── Examen-Web-001
│   └── Proyecto-001
│
└── 📄 README.md
```

---

## 📖 Contenido por Bimestre

### 🎯 Primer Bimestre

#### 📁 **`00-html`**
Estructura semántica básica y ejemplos fundamentales de HTML5.

#### 📁 **`01-server`**
- **Motor:** EJS (Embedded JavaScript)
- **Características:** Renderizado dinámico de vistas (`views/cat.ejs`)
- **Tecnología:** Express.js + Node.js

#### 📁 **`02-SPA`**
- **Tecnología:** Vite + Vanilla JavaScript
- **Proyecto:** "spa-gatito" con manejo de estado simple (counter) y assets
- **Características:** Single Page Application con routing básico

#### 📁 **`03-CSS`**
Estrategias de carga de estilos: dinámicos, externos e importados
- CSS Grid
- Flexbox
- Diseño responsive

#### 📁 **`06-Taller_W3C`**
- **Enfoque:** Implementación de estándares W3C
- **Temática:** Maquetación gaming (Elden Ring, Valorant, etc.)
- **Validación:** Conformidad con estándares web

#### 📁 **`07-Motor_de_Renderizado`**
- **Motor:** Handlebars (`hbs`)
- **Implementación:** Servidor Express con parciales y layouts (`home.hbs`)
- **Características:** Renderizado del lado del servidor

#### 📁 **`08-Clase`**
- **Herramienta:** Suite de pruebas en Bruno
- **Operaciones:** CRUD completo de Posts, Albums, Photos, Todos y Users
- **API:** JSONPlaceholder integration

#### 📁 **`Educacion-html`**
Sitio web educativo con estructura semántica HTML
- Páginas informativas
- Navegación estructurada
- Contenido académico

#### 📁 **`Examen-01`**
- **Especificación:** Definición de API con OpenAPI/Swagger
- **Archivo:** `swagger.yaml`
- **Objetivo:** Documentación formal de endpoints REST

#### 📁 **`Proyecto-01`**
- **Sistema:** E-commerce (Gestión de Productos y Categorías)
- **Documentación:** `store-api.yaml`
- **Testing:** Suite completa de Bruno
  - `create-product`
  - `get-products-filtered`
  - `update-product`
  - `delete-product`
- **Características:** API RESTful completa con filtros y relaciones

#### 📁 **`Tarea01-Uso_de_grillas_o_flexbox`**
- **Objetivo:** Réplica de interfaz web
- **Sitio replicado:** `www.x.com` (Twitter/X)
- **Técnicas:** CSS Grid y Flexbox
- **Responsive:** Diseño adaptable a múltiples dispositivos

---

### 🎯 Segundo Bimestre

#### 📁 **`Clase-010`**
- **Tema:** Backend NestJS con TypeORM y SQLite (Relación 1:N)
- **Base de datos:** SQLite con TypeORM
- **Arquitectura:** Relación 1 a muchos (Recipe → Ingredients)
- **Objetivo:** Gestionar recetas e ingredientes con relaciones en cascada
- **Características:**
  - Relaciones 1:N entre entidades (Una receta tiene muchos ingredientes)
  - Validación automática de datos con class-validator
  - Operaciones CRUD completas para recetas
  - Cascade operations (guardar y eliminar en cascada)
  - DTOs para creación y actualización
  - Paginación en listado de recetas (limit y offset)
  - Manejo de errores con NotFoundException

#### 📁 **`Clase-011`**
- **Tema:** Login con Sesiones en NestJS (FileStore)
- **Tecnología:** Express Session + Session File Store
- **Objetivo:** Sistema de autenticación con sesiones persistentes en archivos
- **Características:**
  - Autenticación con credenciales (usuario: admin, password: 12345678)
  - Almacenamiento de sesiones en archivos JSON (./sessions)
  - Validación de sesión activa (impide login si ya existe sesión)
  - Endpoints: login, logout, status
  - Configuración de cookies seguras (httpOnly)
  - Destrucción completa de sesión con limpieza de cookies
  - Tiempo de vida de sesión configurable (TTL: 1 hora)
  - Extensión de tipos de TypeScript para SessionData

#### 📁 **`Clase-012`**
- **Tema:** Internacionalización (i18n) en NestJS
- **Tecnología:** nestjs-i18n
- **Idiomas:** Español (por defecto) e Inglés
- **Objetivo:** Servir contenido multiidioma según el cliente
- **Características:**
  - Detección automática de idioma por query params (?lang=en)
  - Detección por cabeceras HTTP (Accept-Language)
  - Idioma de respaldo/fallback configurable (Español)
  - Archivos JSON de traducción por idioma
  - Recarga en caliente de traducciones en desarrollo
  - Configuración de assets en nest-cli.json para compilación
  - Estructura modular: src/i18n/es/ y src/i18n/en/

#### 📁 **`Taller-en-Clase`**
- **Tipo:** Evaluación integral de 3 etapas
- **Modalidad:** Individual
- **Objetivo:** Evaluar lógica de programación, análisis de datos y seguridad

**Etapa 1: Calculadora Interactiva**
- **Archivo:** calculadora.py
- **Características:**
  - Menú interactivo CLI
  - Operaciones: suma, resta, multiplicación, división y potencia
  - Validación de entrada de datos
  - Manejo de división por cero
  - Control de errores con try-except

**Etapa 2: Análisis de Datos y Estadística**
- **Archivos:** analisis.py, notas.csv
- **Tecnologías:** Python + Pandas + Matplotlib
- **Características:**
  - Cálculo de promedio de bimestres por estudiante
  - Estadística descriptiva (Media, Mediana, Moda)
  - Identificación de valores extremos (notas altas y bajas)
  - Análisis de sentimientos en comentarios
  - Visualización: gráfico de pastel (distribución de opiniones)
  - Procesamiento de archivos CSV

**Etapa 3: Análisis de Seguridad (React)**
- **Archivo:** Informe_Seguridad.pdf
- **Tema:** Vulnerabilidad CVE-2025-55182 en React Server Components
- **Características:**
  - Identificación técnica del fallo (deserialización insegura)
  - Análisis de vectores de ataque
  - Evaluación de impacto (Ejecución remota de código - RCE)
  - Recomendaciones de mitigación
  - Mejores prácticas de seguridad

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
  - Validación de datos con DTOs
  - Manejo de errores y excepciones

#### 📁 **`Proyecto-001`**
- **Tema:** Documentación de API con Swagger/OpenAPI
- **Base:** Extensión del Examen-Web-001
- **Tecnología:** @nestjs/swagger + swagger-ui-express
- **Características:**
  - Documentación automática de endpoints
  - Decoradores en controladores (@ApiOperation, @ApiResponse)
  - Decoradores en DTOs (@ApiProperty)
  - Interfaz interactiva Swagger UI en `/api`
  - Especificación OpenAPI 3.0 completa
  - Ejemplos de uso y respuestas documentadas
  - Agrupación de endpoints por tags
  - Testing integrado desde el navegador

---

## 🚀 Cómo usar este repositorio

### ⚙️ Abrir páginas HTML en Windows

```powershell
# Navegar a la carpeta del bimestre correspondiente
cd "Primer Bimestre - Aplicaciones Web"

# Abrir archivo HTML
Start-Process .\00-html\index.html
```

### ⚙️ Ejecutar proyectos Node.js (Primer Bimestre)

```powershell
# Navegar al proyecto específico
cd "Primer Bimestre - Aplicaciones Web/02-SPA"

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### ⚙️ Ejecutar proyectos NestJS (Segundo Bimestre)

```powershell
# Ejemplo: Clase-010
cd "Segundo Bimestre - Aplicaciones Web/Clase-010"

# Instalar dependencias
npm install

# Modo desarrollo (con recarga automática)
npm run start:dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm run start:prod
```

### ⚙️ Ejecutar proyectos Python (Taller No Recuperable)

```bash
# Instalar dependencias (solo para Etapa 2)
pip install pandas matplotlib

# Ejecutar Etapa 1
cd "Segundo Bimestre - Aplicaciones Web/Taller-No-Recuperable/Etapa1"
python calculadora.py

# Ejecutar Etapa 2
cd "Segundo Bimestre - Aplicaciones Web/Taller-No-Recuperable/Etapa2"
python analisis.py
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
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

- HTML5 semántico
- CSS3 (Grid, Flexbox, Responsive Design)
- JavaScript (Vanilla JS, ES6+)
- Vite (Build tool)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

- Node.js
- NestJS (Framework principal del segundo bimestre)
- Express.js
- TypeScript
- EJS (Embedded JavaScript)
- Handlebars (hbs)

### Base de Datos
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=flat&logo=typeorm&logoColor=white)

- SQLite (Base de datos embebida)
- TypeORM (ORM para Node.js/TypeScript)

### Análisis de Datos
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white)

- Python 3.x
- Pandas (Análisis de datos)
- Matplotlib (Visualización)

### API & Testing
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)
![Bruno](https://img.shields.io/badge/Bruno-5C5CFF?style=flat&logo=bruno&logoColor=white)

- OpenAPI/Swagger
- Bruno (API Testing)
- REST APIs
- @nestjs/swagger

### Autenticación & Seguridad
- Express Session
- Session File Store
- Cookie Management
- CVE Analysis

### Internacionalización
- nestjs-i18n
- JSON Translation Files
- Multi-language Support

### Desarrollo
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

- Git & GitHub
- npm/npx
- PowerShell
- VS Code

---

## 📊 Resumen de Tecnologías por Proyecto

### Primer Bimestre

| Proyecto | HTML/CSS | JavaScript | Node.js | Express | EJS | Handlebars | Bruno |
|----------|----------|------------|---------|---------|-----|------------|-------|
| 00-html | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| 01-server | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| 02-SPA | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| 03-CSS | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| 06-Taller_W3C | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| 07-Motor | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| 08-Clase | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Examen-01 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Proyecto-01 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

### Segundo Bimestre

| Proyecto | NestJS | TypeORM | SQLite | Session | i18n | Swagger | Python |
|----------|--------|---------|--------|---------|------|---------|--------|
| Clase-010 | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Clase-011 | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Clase-012 | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Taller | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Examen-Web-001 | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Proyecto-001 | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |

---

## 🎓 Competencias Desarrolladas

### 📱 Frontend Development
- ✅ HTML5 semántico y accesible
- ✅ CSS avanzado (Grid, Flexbox, Responsive)
- ✅ JavaScript moderno (ES6+)
- ✅ Single Page Applications (SPA)
- ✅ Vite como build tool
- ✅ Diseño adaptable y responsive

### 🔧 Backend Development
- ✅ Node.js y Express.js
- ✅ Arquitectura de APIs RESTful
- ✅ NestJS (Framework empresarial)
- ✅ Manejo de bases de datos relacionales
- ✅ Relaciones entre entidades (1:N, N:M)
- ✅ Operaciones CRUD completas
- ✅ Validación de datos con DTOs
- ✅ Motores de plantillas (EJS, Handlebars)

### 🗄️ Base de Datos
- ✅ SQLite (Base de datos embebida)
- ✅ TypeORM (Object-Relational Mapping)
- ✅ Diseño de esquemas relacionales
- ✅ Migraciones y sincronización
- ✅ Operaciones en cascada

### 🔐 Seguridad
- ✅ Autenticación con sesiones
- ✅ Almacenamiento seguro de sesiones
- ✅ Configuración de cookies (httpOnly)
- ✅ Análisis de vulnerabilidades (CVE)
- ✅ Comprensión de ataques RCE
- ✅ Mejores prácticas de seguridad

### 🌍 Internacionalización
- ✅ Implementación de soporte multiidioma
- ✅ Detección automática de idioma del cliente
- ✅ Gestión de traducciones con archivos JSON
- ✅ Configuración de idioma de respaldo

### 📚 Documentación
- ✅ OpenAPI/Swagger specification
- ✅ Documentación automática con @nestjs/swagger
- ✅ Interfaz interactiva para testing
- ✅ Buenas prácticas de documentación técnica
- ✅ Especificación YAML de APIs

### 📊 Análisis de Datos
- ✅ Procesamiento de datos con Pandas
- ✅ Estadística descriptiva (Media, Mediana, Moda)
- ✅ Visualización de datos con Matplotlib
- ✅ Análisis de sentimientos básico
- ✅ Manipulación de archivos CSV

### 💻 Programación General
- ✅ Lógica de programación (Python)
- ✅ Manejo de excepciones
- ✅ Validación de entrada de datos
- ✅ Modularización de código
- ✅ Control de versiones con Git

### 🧪 Testing
- ✅ Bruno para testing de APIs
- ✅ Pruebas de endpoints REST
- ✅ Validación de respuestas HTTP
- ✅ Testing integrado con Swagger UI

---

## 📈 Progresión del Aprendizaje

### 🟢 Fase 1: Fundamentos Web (Semanas 1-4)
- Estructura HTML semántica
- Estilos CSS y layouts
- JavaScript básico
- Páginas estáticas

### 🔵 Fase 2: Aplicaciones Dinámicas (Semanas 5-8)
- Servidores con Node.js y Express
- Motores de plantillas (EJS, Handlebars)
- Single Page Applications (SPA)
- Routing y estado

### 🟣 Fase 3: APIs y Servicios (Semanas 9-12)
- Diseño de APIs RESTful
- Documentación con OpenAPI/Swagger
- Testing con Bruno
- Integración de servicios externos

### 🟡 Fase 4: Backend Profesional (Semanas 13-16)
- NestJS como framework empresarial
- TypeORM y bases de datos relacionales
- Relaciones entre entidades (1:N)
- Validación y DTOs

### 🟠 Fase 5: Características Avanzadas (Semanas 17-20)
- Autenticación y sesiones
- Internacionalización (i18n)
- Documentación automática con Swagger
- Configuración de seguridad

### 🔴 Fase 6: Evaluación Integral (Semanas 21-24)
- Análisis de datos con Python
- Seguridad informática (CVE)
- Proyectos integradores
- Evaluaciones completas

---

## 📅 Cronología

| Período | Bimestre | Contenido Principal |
|---------|----------|---------------------|
| Sep - Dic 2025 | Primer Bimestre | Fundamentos Web, SPA, CSS, APIs REST, Documentación |
| Ene - Feb 2026 | Segundo Bimestre | NestJS, TypeORM, Autenticación, i18n, Análisis de Datos |

---

## 📊 Progreso del Curso

### Primer Bimestre ✅ (100% Completado)
- [x] Fundamentos de HTML5
- [x] CSS avanzado (Grid/Flexbox)
- [x] JavaScript y SPA con Vite
- [x] Motores de renderizado (EJS, Handlebars)
- [x] APIs REST y documentación OpenAPI
- [x] Testing con Bruno
- [x] Proyecto integrador E-commerce
- [x] Examen y evaluaciones

### Segundo Bimestre ✅ (100% Completado)
- [x] Clase-010: TypeORM y relaciones 1:N
- [x] Clase-011: Autenticación con sesiones
- [x] Clase-012: Internacionalización (i18n)
- [x] Taller No Recuperable (3 etapas)
- [x] Examen Web 001: API RESTful con NestJS
- [x] Proyecto 001: Documentación con Swagger

---

## 📝 Documentación Adicional

Cada proyecto cuenta con su propia documentación detallada:

- 📄 **Clase-010**: [README_Clase-010.md](./Segundo%20Bimestre/Clase-010/README.md)
- 📄 **Clase-011**: [README_Clase-011.md](./Segundo%20Bimestre/Clase-011/README.md)
- 📄 **Clase-012**: [README_Clase-012.md](./Segundo%20Bimestre/Clase-012/README.md)
- 📄 **Taller No Recuperable**: [README_Taller.md](./Segundo%20Bimestre/Taller-No-Recuperable/README.md)
- 📄 **Proyecto-001**: [README_Proyecto-001.md](./Segundo%20Bimestre/Proyecto-001/README.md)

---

## 🎯 Objetivos de Aprendizaje Alcanzados

### Conocimientos Técnicos
✅ Desarrollo full-stack con JavaScript/TypeScript  
✅ Arquitectura de aplicaciones web modernas  
✅ Diseño e implementación de APIs RESTful  
✅ Manejo de bases de datos relacionales  
✅ Implementación de autenticación y seguridad  
✅ Internacionalización de aplicaciones  
✅ Documentación técnica profesional  
✅ Testing de APIs  
✅ Análisis de datos con Python  
✅ Análisis de vulnerabilidades de seguridad  

### Habilidades Profesionales
✅ Trabajo con frameworks modernos (NestJS, Express)  
✅ Uso de herramientas de desarrollo (Git, npm, Bruno)  
✅ Documentación de código y APIs  
✅ Resolución de problemas técnicos  
✅ Implementación de mejores prácticas  
✅ Análisis crítico de seguridad  
✅ Gestión de proyectos de software  

---

## 🔧 Solución de Problemas Comunes

### Error: Module not found
```bash
# Reinstalar dependencias
npm install
# o para Python
pip install -r requirements.txt
```

### Error: Port already in use
```bash
# Cambiar el puerto en el archivo de configuración
# o matar el proceso que está usando el puerto
npx kill-port 3000
```

### Error: Cannot connect to database
```bash
# Verificar que la base de datos existe
# Para SQLite, el archivo .sqlite se crea automáticamente
# Verificar la configuración en app.module.ts
```

### Error: Session not working
```bash
# Verificar que la carpeta ./sessions existe
# Verificar la configuración de cookies
# Limpiar cookies del navegador
```

---

## 📚 Recursos Adicionales

### Documentación Oficial
- 📘 [NestJS Documentation](https://docs.nestjs.com/)
- 📗 [TypeORM Documentation](https://typeorm.io/)
- 📙 [Express.js Documentation](https://expressjs.com/)
- 📕 [Node.js Documentation](https://nodejs.org/docs/)
- 📓 [MDN Web Docs](https://developer.mozilla.org/)

### Herramientas
- 🔧 [Bruno API Client](https://www.usebruno.com/)
- 🔧 [Swagger Editor](https://editor.swagger.io/)
- 🔧 [VS Code](https://code.visualstudio.com/)
- 🔧 [Git](https://git-scm.com/)

### Tutoriales y Guías
- 🎓 [NestJS Fundamentals](https://docs.nestjs.com/fundamentals/custom-providers)
- 🎓 [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 🎓 [REST API Best Practices](https://restfulapi.net/)

---

## 👨‍💻 Autor

**Joel Patricio Quilumba Morocho**  
Estudiante de Ingeniería en Computación - 6to Semestre  
Escuela Politécnica Nacional - 2025-B

📧 Contacto disponible a través de la plataforma académica  
🎓 Grupo: GR1SW  
💼 [GitHub Profile](https://github.com/jpquilumba)

---

## 📝 Notas Importantes

- ✅ Este repositorio se actualiza continuamente con nuevas prácticas y proyectos
- 📌 Los trabajos están organizados cronológicamente por bimestres
- 🔄 La estructura facilita la navegación y revisión del progreso académico
- 💡 Cada carpeta incluye su propia documentación específica cuando es necesario
- 🎯 El código sigue las mejores prácticas y estándares de la industria
- 🔒 Las credenciales y datos sensibles están en archivos .env (no incluidos en el repositorio)
- 📖 La documentación está en español para facilitar la comprensión académica

---

## 🤝 Contribuciones

Este es un repositorio académico personal. Sin embargo, sugerencias y mejoras son bienvenidas:

1. 🐛 Reportar bugs o problemas
2. 💡 Sugerir mejoras en la documentación
3. 📝 Compartir recursos útiles relacionados
4. 🎓 Colaborar en proyectos académicos permitidos

---

## 📄 Licencia

Este proyecto es de uso académico y educativo.  
Desarrollado como parte del curso de Aplicaciones Web en la Escuela Politécnica Nacional.

---

## 🏆 Logros y Reconocimientos

### Primer Bimestre
🥇 Proyecto E-commerce completo con API documentada  
🥈 Réplica exitosa de interfaz web (Twitter/X)  
🥉 Implementación de estándares W3C  

### Segundo Bimestre
🥇 API RESTful profesional con documentación Swagger  
🥈 Sistema de autenticación con sesiones seguras  
🥉 Aplicación multiidioma con i18n  
🏅 Análisis integral de datos y seguridad  

---

## 🎉 Agradecimientos

- 👨‍🏫 Profesores del curso de Aplicaciones Web GR1SW
- 👥 Compañeros de clase por el apoyo colaborativo
- 📚 Comunidad de desarrolladores de NestJS y Node.js
- 💻 Recursos de aprendizaje en línea (MDN, Stack Overflow, etc.)
- 🏛️ Escuela Politécnica Nacional por la formación académica

---

<div align="center">

---

### 🎓 Escuela Politécnica Nacional
**Innovación y Excelencia Académica**

---

![EPN](https://img.shields.io/badge/EPN-Escuela%20Polit%C3%A9cnica%20Nacional-003366?style=for-the-badge)

**Aplicaciones Web GR1SW | 2025-B**

---

*"El conocimiento es el único bien que aumenta cuando se comparte"*

---

</div>