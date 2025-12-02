# Examen 01 - Documentación de API REST con Swagger/OpenAPI

## 📋 Descripción del Examen

Este examen consiste en la **documentación completa y profesional** de
los endpoints de la API **JSONPlaceholder**, utilizando **Swagger
Editor** y la especificación **OpenAPI 3.0.3**.\
El propósito es crear una interfaz interactiva que permita:

-   Visualizar todos los endpoints disponibles.\
-   Comprender su funcionamiento y estructura.\
-   Probar directamente las operaciones desde Swagger UI.\
-   Establecer un contrato de API formal y reutilizable para
    desarrolladores y testers.

Este proyecto replica un estándar **Enterprise**, incorporando aspectos
avanzados como seguridad simulada, control de paginación, cabeceras
personalizadas y manejo estructurado de errores.

------------------------------------------------------------------------

## 🎯 Objetivos del Examen

-   **Documentar endpoints REST:** Cobertura completa de todos los
    recursos de JSONPlaceholder.\
-   **Usar OpenAPI 3.0.3:** Aplicación rigurosa del estándar para
    definir rutas, parámetros, esquemas y respuestas.\
-   **Generar interfaz interactiva:** Creación de documentación
    totalmente navegable mediante Swagger UI.\
-   **Permitir pruebas reales:** Ejecución directa de peticiones HTTP
    desde la interfaz.\
-   **Modelar datos complejos:** Definir estructuras reutilizables
    mediante `components/schemas`.\
-   **Implementar buenas prácticas:** Respuestas coherentes, ejemplos
    válidos, estandarización de formatos y manejo de errores.

------------------------------------------------------------------------

## 🛠️ Tecnologías Utilizadas

-   **OpenAPI 3.0.3**
-   **Swagger Editor**
-   **Swagger UI**
-   **JSONPlaceholder API**
-   **Git/GitHub**

------------------------------------------------------------------------

## 📁 Estructura del Proyecto

    Examen-01/
    ├── swagger-doc.yaml    # Documentación completa en OpenAPI
    └── README.md           # Archivo principal con explicación técnica

------------------------------------------------------------------------

# 📚 Recursos Documentados

La API JSONPlaceholder incluye 6 recursos REST principales documentados
en este examen:

------------------------------------------------------------------------

# 1. 📌 Posts (`/posts`)

-   **GET** `/posts` -- Obtener todos los posts\
-   **GET** `/posts/{id}` -- Obtener un post específico\
-   **POST** `/posts` -- Crear un nuevo post\
-   **PUT** `/posts/{id}` -- Actualizar un post completo\
-   **PATCH** `/posts/{id}` -- Actualizar parcialmente un post\
-   **DELETE** `/posts/{id}` -- Eliminar un post\
-   **GET** `/posts/{id}/comments` -- Obtener comentarios de un post

------------------------------------------------------------------------

# 2. 🗨️ Comments (`/comments`)

-   **GET** `/comments` -- Obtener todos los comentarios\
-   **GET** `/comments/{id}` -- Obtener un comentario específico\
-   **POST** `/comments` -- Crear un nuevo comentario\
-   **PUT** `/comments/{id}` -- Actualizar un comentario\
-   **DELETE** `/comments/{id}` -- Eliminar un comentario\
-   **GET** `/comments?postId={postId}` -- Filtrar comentarios por post

------------------------------------------------------------------------

# 3. 🖼️ Albums (`/albums`)

-   **GET** `/albums` -- Obtener todos los álbumes\
-   **GET** `/albums/{id}` -- Obtener un álbum específico\
-   **POST** `/albums` -- Crear un nuevo álbum\
-   **PUT** `/albums/{id}` -- Actualizar un álbum\
-   **DELETE** `/albums/{id}` -- Eliminar un álbum\
-   **GET** `/albums/{id}/photos` -- Obtener fotos de un álbum

------------------------------------------------------------------------

# 4. 📷 Photos (`/photos`)

-   **GET** `/photos` -- Obtener todas las fotos\
-   **GET** `/photos/{id}` -- Obtener una foto específica\
-   **POST** `/photos` -- Crear una nueva foto\
-   **PUT** `/photos/{id}` -- Actualizar una foto\
-   **DELETE** `/photos/{id}` -- Eliminar una foto

------------------------------------------------------------------------

# 5. 📋 Todos (`/todos`)

-   **GET** `/todos` -- Obtener todas las tareas\
-   **GET** `/todos/{id}` -- Obtener una tarea específica\
-   **POST** `/todos` -- Crear una nueva tarea\
-   **PUT** `/todos/{id}` -- Actualizar una tarea\
-   **DELETE** `/todos/{id}` -- Eliminar una tarea\
-   **GET** `/todos?completed={true|false}` -- Filtrar por estado de
    completado

------------------------------------------------------------------------

# 6. 👥 Users (`/users`)

-   **GET** `/users` -- Obtener todos los usuarios\
-   **GET** `/users/{id}` -- Obtener un usuario específico\
-   **POST** `/users` -- Crear un nuevo usuario\
-   **PUT** `/users/{id}` -- Actualizar un usuario\
-   **DELETE** `/users/{id}` -- Eliminar un usuario\
-   **GET** `/users/{id}/posts` -- Obtener posts de un usuario\
-   **GET** `/users/{id}/albums` -- Obtener álbumes de un usuario\
-   **GET** `/users/{id}/todos` -- Obtener tareas de un usuario

------------------------------------------------------------------------

## 🔧 Schemas (Modelos de Datos)

Incluidos en `components/schemas`:

-   **Post**
-   **Comment**
-   **Album**
-   **Photo**
-   **Todo**
-   **User**
-   **Address**
-   **Geo**
-   **Company**
-   **Error**

Modelos reutilizables, consistentes y descritos con buenas prácticas.

------------------------------------------------------------------------

## 🚀 Cómo Usar la Documentación

### ✔️ Opción 1: Swagger Editor Online

1.  Ir a https://editor.swagger.io\
2.  Copiar `swagger-doc.yaml`\
3.  Pegar en el panel izquierdo

### ✔️ Opción 2: Cargar Archivo Local

1.  File → Import File\
2.  Seleccionar `swagger-doc.yaml`

------------------------------------------------------------------------

## 🧪 Pruebas de Endpoints

### Ejemplo: Crear un Post

``` json
{
  "title": "Mi primer post",
  "body": "Este es el contenido de mi post",
  "userId": 1
}
```

------------------------------------------------------------------------

## 📝 Notas Importantes

### ⚠️ JSONPlaceholder es una API Fake

-   No almacena cambios reales\
-   Simula operaciones para practicar

------------------------------------------------------------------------

## 🎓 Conceptos Aprendidos

-   Estructura OpenAPI\
-   Diseño de endpoints\
-   Modelado de datos\
-   Validación\
-   Swagger UI y documentación interactiva

------------------------------------------------------------------------

## ✔️ Resultados del Examen

-   Más de **40 endpoints** documentados\
-   Estructura profesional\
-   Modelos reutilizables\
-   Cumplimiento absoluto de OpenAPI 3.0.3

------------------------------------------------------------------------

## 👨‍💻 Autor

**Joel Quilumba**\
Escuela Politécnica Nacional\
Aplicaciones Web -- GR1SW\
Semestre 2025-B\

