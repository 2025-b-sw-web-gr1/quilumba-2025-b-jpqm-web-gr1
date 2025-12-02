# Clase 008 - 009: Revisión de Conceptos, Parámetros y Métodos HTTP

Este repositorio contiene el desarrollo del taller práctico realizado durante las clases 008 y 009. El objetivo principal fue profundizar en el funcionamiento del protocolo HTTP, la gestión de peticiones a una API REST y el uso de herramientas de prueba de endpoints.

## 📋 Descripción de la Actividad

Se configuró un entorno de pruebas local utilizando **Bruno** para interactuar con la API pública **JSONPlaceholder**. A través de esta práctica, se simularon operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre diferentes recursos.

### 🛠 Herramientas Utilizadas
* **[Bruno](https://www.usebruno.com/):** Cliente API de código abierto utilizado para construir, organizar y ejecutar las peticiones HTTP.
* **[JSONPlaceholder](https://jsonplaceholder.typicode.com/):** API REST falsa gratuita utilizada como servidor de prueba para prototipado y educación.

---

## 📚 Conceptos Teóricos Aplicados

Durante el taller se pusieron en práctica los siguientes verbos HTTP y sus diferencias:

* **GET:** Solicitud de información al servidor. No lleva cuerpo (body).
    * *Ejemplo:* Obtener lista de usuarios o un post específico.
* **POST:** Envío de datos al servidor para crear un nuevo recurso. Requiere un cuerpo (body) en formato JSON.
    * *Código esperado:* `201 Created`.
* **PUT:** Actualización **completa** de un recurso existente. Se envían todos los datos del objeto.
* **PATCH:** Actualización **parcial** de un recurso. Solo se envía el dato que se desea modificar (ej. solo el título).
* **DELETE:** Eliminación de un recurso específico.

### Códigos de Estado (Status Codes) Observados
* 🟢 **200 OK:** La petición fue exitosa (común en GET, PUT, PATCH, DELETE).
* 🟢 **201 Created:** El recurso fue creado exitosamente (común en POST).

---

## 📂 Estructura del Taller (Colección Bruno)

La colección `Clase-008` consta de **19 peticiones** organizadas por tipo de recurso:

### 1. Posts (Publicaciones)
Pruebas completas de ciclo de vida de un recurso.
* `get-all-posts`: Obtener todos los registros.
* `get-post-by-id`: Uso de **Path Params** (`/posts/1`).
* `create-post`: Envío de datos JSON.
* `update-post-put`: Reemplazo total de un registro.
* `update-post-title`: Modificación parcial (PATCH).
* `delete-post`: Eliminación de registro.

### 2. Comments (Comentarios)
Uso de filtros mediante parámetros de consulta.
* `get-all-comments`: Listado general.
* `get-comments-by-post`: Uso de **Query Params** (`?postId=1`).
* `create-comment`: Creación asociada a un post.

### 3. Albums (Álbumes)
* `get-all-albums`
* `get-album-by-id`
* `create-album`

### 4. Photos (Fotos)
* `get-all-photos`
* `get-photos-by-album`: Filtrado por álbum.

### 5. Todos (Tareas)
* `get-all-todos`
* `get-todo-by-id`
* `create-todo`

### 6. Users (Usuarios)
* `get-all-users`: Obtención de objetos complejos (datos anidados).
* `get-user-by-id`

---

## 🚀 Aprendizajes Clave
1.  **Diferencia entre Path y Query Params:** Entender cuándo un parámetro es parte de la ruta (`/1`) y cuándo es un filtro de búsqueda (`?id=1`).
2.  **Configuración de Body:** Aprender a configurar el cuerpo de la petición como `JSON` para métodos POST/PUT y dejarlo en `None` para métodos GET.
3.  **Herencia de Autenticación:** Uso de `auth: inherit` en Bruno para mantener una configuración limpia.

---
* Autor: [Joel Quilumba]
* Curso: Aplicaciones Web GR1SW
* *Semestre: 2025-B