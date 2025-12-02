# Examen 01 - Documentación de API REST con Swagger/OpenAPI

## 📋 Descripción del Examen

Este examen consiste en la **documentación completa y profesional** de los endpoints de la API **JSONPlaceholder**, utilizando **Swagger Editor** y la especificación **OpenAPI 3.0.3**.  
El propósito es crear una interfaz interactiva que permita:

- Visualizar todos los endpoints disponibles.  
- Comprender su funcionamiento y estructura.  
- Probar directamente las operaciones desde Swagger UI.  
- Establecer un contrato de API formal y reutilizable para desarrolladores y testers.

Este proyecto replica un estándar **Enterprise**, incorporando aspectos avanzados como seguridad simulada, control de paginación, cabeceras personalizadas y manejo estructurado de errores.

---

## 🎯 Objetivos del Examen

- **Documentar endpoints REST:** Cobertura completa de todos los recursos de JSONPlaceholder.  
- **Usar OpenAPI 3.0.3:** Aplicación rigurosa del estándar para definir rutas, parámetros, esquemas y respuestas.  
- **Generar interfaz interactiva:** Creación de documentación totalmente navegable mediante Swagger UI.  
- **Permitir pruebas reales:** Ejecución directa de peticiones HTTP desde la interfaz.  
- **Modelar datos complejos:** Definir estructuras reutilizables mediante `components/schemas`.  
- **Implementar buenas prácticas:** Respuestas coherentes, ejemplos válidos, estandarización de formatos y manejo de errores.

---

## 🛠️ Tecnologías Utilizadas

- **OpenAPI 3.0.3:** Estándar actual para describir APIs REST.
- **Swagger Editor:** Redactor y validador en YAML para OpenAPI.
- **Swagger UI:** Interfaz gráfica interactiva generada desde el archivo YAML.
- **JSONPlaceholder API:** API REST gratuita usada como backend de práctica.
- **Git/GitHub:** Control de versiones para almacenamiento del examen.

---

## 📁 Estructura del Proyecto

```
Examen-01/
├── swagger-doc.yaml    # Documentación completa en OpenAPI
└── README.md           # Archivo principal con explicación técnica
```

---

## 📚 Recursos Documentados

La API JSONPlaceholder incluye 6 recursos REST principales documentados en este examen:

---

### 1. 📌 Posts (`/posts`)
Operaciones documentadas:
- **GET /posts** – Listar todos los posts (con paginación, ordenamiento y filtros)
- **GET /posts/{id}** – Obtener un post específico
- **POST /posts** – Crear un nuevo post
- **PUT /posts/{id}** – Actualizar un post completo
- **PATCH /posts/{id}** – Actualización parcial (solo campos modificados)
- **DELETE /posts/{id}** – Eliminar un post
- **GET /posts/{id}/comments** – Obtener comentarios asociados

---

### 2. 🗨️ Comments (`/comments`)
- **GET /comments**
- **GET /comments/{id}**
- **POST /comments**
- **PUT /comments/{id}**
- **DELETE /comments/{id}**

Además:
- Filtrado por `postId`
- Validación de email en el esquema

---

### 3. 🖼️ Albums (`/albums`)
- Rutas CRUD completas
- Relacionados con usuarios mediante `userId`
- Soporte para:
  - **GET /albums/{id}/photos**

---

### 4. 📷 Photos (`/photos`)
Incluye:
- Listado completo
- Rutas CRUD
- Campos especiales como `url` y `thumbnailUrl`

---

### 5. 📋 Todos (`/todos`)
Gestiona tareas pendientes:
- CRUD completo
- Filtrado por estado `completed`

---

### 6. 👥 Users (`/users`)
Documentación avanzada:
- Datos anidados: `address`, `company` y `geo`
- Endpoints derivados:
  - **GET /users/{id}/posts**
  - **GET /users/{id}/albums**
  - **GET /users/{id}/todos**

---

## 🔧 Schemas (Modelos de Datos)

Se incluyen modelos reutilizables detallados en `components/schemas`:

- **Post:** userId, id, title, body  
- **Comment:** postId, id, name, email, body  
- **Album:** userId, id, title  
- **Photo:** albumId, id, title, url, thumbnailUrl  
- **Todo:** userId, id, title, completed  
- **User:** id, name, username, email, phone, website, address, company  
- **Address:** street, suite, city, zipcode, geo  
- **Geo:** lat, lng  
- **Company:** name, catchPhrase, bs  
- **Error:** code, message, timestamp  

Estos esquemas permiten mantener consistencia, evitar duplicación y mejorar la escalabilidad.

---

## 🚀 Cómo Usar la Documentación

### ✔️ Opción 1: Swagger Editor Online (Recomendada)
1. Ir a https://editor.swagger.io  
2. Copiar el contenido de `swagger-doc.yaml`  
3. Pegar en el panel izquierdo  
4. Visualizar automáticamente la API en el panel derecho  

---

### ✔️ Opción 2: Cargar Archivo Local
1. Abrir https://editor.swagger.io  
2. Ir a **File → Import File**  
3. Seleccionar `swagger-doc.yaml`  

---

## 🧪 Pruebas de Endpoints

La documentación generada permite realizar pruebas:

### Ejemplo 1: Obtener Posts
1. Expandir **GET /posts**  
2. Clic en **Try it out**  
3. Ejecutar (**Execute**)  
4. Ver la respuesta con los 100 posts  

---

### Ejemplo 2: Crear un Post
Request body:
```json
{
  "title": "Mi primer post",
  "body": "Este es el contenido de mi post",
  "userId": 1
}
```
Resultado:
- Respuesta **201 Created**
- Objeto creado con `id: 101`

---

## 📖 Características Importantes de la Documentación

### ✔️ Organización por Categorías (Tags)
- Posts  
- Comments  
- Albums  
- Photos  
- Todos  
- Users  

### ✔️ Información por Endpoint
Cada ruta incluye:
- `summary`
- `description`
- parámetros (query, path)
- request body
- respuestas detalladas
- ejemplos de entrada y salida

### ✔️ Validación y Buenas Prácticas
- Campos requeridos  
- Tipos de datos  
- Formatos (`email`, `uri`)  
- Uso de `$ref` para reutilización  

---

## 🎓 Conceptos Aprendidos

### OpenAPI / Swagger
- Estructura de un archivo OpenAPI  
- Definición de operaciones  
- Manejo de schemas  
- Uso de ejemplos  
- Modelado de errores  

### APIs REST
- Diseño de endpoints  
- Métodos HTTP  
- Códigos de respuesta  
- Relaciones entre recursos  

---

## 📝 Notas Importantes

### ⚠️ JSONPlaceholder es una API Fake  
- Acepta POST, PUT, DELETE  
- **No guarda cambios reales**  
- Simula respuestas para aprendizaje  

Ejemplos:
- `POST` siempre retorna `id: 101`  
- `DELETE` siempre devuelve 200 aunque no borre nada  

---

## 🔍 Validación del Archivo
El archivo `swagger-doc.yaml` cumple con:

- ✔️ Especificación OpenAPI 3.0.3  
- ✔️ Sintaxis YAML válida  
- ✔️ Estructuras esquematizadas  
- ✔️ Ejemplos consistentes  

---

## 🎯 Resultados del Examen

- ✔️ Documentación completa de los 6 recursos  
- ✔️ Más de **40 operaciones HTTP** documentadas  
- ✔️ Modelos de datos totalmente estructurados  
- ✔️ Interfaz 100% interactiva en Swagger UI  
- ✔️ Cumplimiento estricto de OpenAPI  
- ✔️ Documentación profesional apta para entrega académica  

---

## 👨‍💻 Autor

**Joel Quilumba**  
Escuela Politécnica Nacional  
Aplicaciones Web - GR1SW
Semestre 2025-B  
