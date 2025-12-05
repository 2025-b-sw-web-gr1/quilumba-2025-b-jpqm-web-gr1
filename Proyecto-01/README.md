# 🛒 API RESTful - Tienda Online "TechStore"

## Autor: 
**Joel Patricio Quilumba Morocho**

---

## 📋 Descripción del Proyecto

En este proyecto hemos diseñado y documentado una arquitectura **API RESTful de nivel Enterprise** para gestionar el catálogo completo de la tienda online **"TechStore"**.

Se ha implementado una relación de **Uno a Muchos (1:N)** entre:

1. **Categorías (Categories):** Entidad principal que representa secciones del catálogo (Ej: Electrónica, Hogar, Tecnología).
2. **Productos (Products):** Entidad dependiente. Cada producto pertenece estrictamente a una categoría.

### 🎯 Objetivos del Proyecto

* Diseñar una API RESTful completa siguiendo los principios y mejores prácticas de arquitectura REST
* Implementar correctamente la relación 1:N entre entidades del dominio de e-commerce
* Documentar exhaustivamente la API usando el estándar OpenAPI 3.0
* Crear una colección completa de pruebas HTTP organizadas modularmente
* Aplicar validaciones de datos y manejo profesional de errores
* Implementar funcionalidades avanzadas de búsqueda y filtrado de productos

### 🌟 Características Destacadas

* ✅ **Documentación OpenAPI 3.0** completa e interactiva
* ✅ **Colección Bruno** modular con ejemplos reales
* ✅ **Búsqueda avanzada** con filtros de precio y texto
* ✅ **Paginación** de resultados de productos
* ✅ **Validaciones de negocio** en todos los endpoints
* ✅ **Manejo de errores** con códigos HTTP estándar
* ✅ **Relaciones consistentes** entre categorías y productos
* ✅ **Ejemplos prácticos** para cada operación CRUD

---

## 🛠️ Stack Tecnológico

* **OpenAPI 3.0 (Swagger):** Documentación estándar del contrato de la API (`store-api.yaml`)
* **Bruno:** Cliente HTTP moderno y open-source para pruebas organizadas modularmente
* **JSON:** Formato de intercambio de datos
* **REST:** Arquitectura de servicios web

### ¿Por qué estas tecnologías?

**OpenAPI/Swagger** es el estándar de facto en la industria para documentar APIs RESTful. Permite:
- Documentación interactiva y visual
- Generación automática de código cliente/servidor
- Validación automática de requests/responses
- Integración con herramientas de testing

**Bruno** se seleccionó sobre Postman por ser:
- Open-source y gratuito
- Basado en archivos (fácil versionamiento en Git)
- Rápido y ligero
- Sin necesidad de cuenta en la nube
- Perfecto para trabajo colaborativo en equipo

---

## 📂 Estructura del Repositorio

El proyecto se organiza en módulos para facilitar la escalabilidad y mantenibilidad:
```
Proyecto-01/
│
├── store-api.yaml                  # Documentación Swagger (Versión Enterprise v2.1.0)
├── README.md                       # Informe Técnico (este archivo)
├── bruno.json                      # Configuración de la colección Bruno
│
├── 01-Endpoints-Categorias/        # Módulo de gestión de Categorías
│   ├── create-category.bru        # POST - Crear nueva categoría
│   ├── delete-category.bru        # DELETE - Eliminar categoría
│   ├── get-all-categories.bru     # GET - Listar todas las categorías
│   ├── get-category-by-id.bru     # GET - Buscar categoría por ID
│   └── update-category.bru        # PUT - Actualizar categoría
│
└── 02-Endpoints-Productos/         # Módulo de gestión de Productos
    ├── create-product.bru         # POST - Registrar nuevo producto
    ├── delete-product.bru         # DELETE - Dar de baja producto
    ├── get-all-products.bru       # GET - Catálogo completo
    ├── get-product-by-id.bru      # GET - Detalle de producto
    ├── get-products-by-category.bru  # GET - Productos de una categoría (Relación 1:N)
    ├── get-products-filtered.bru  # GET - Búsqueda avanzada con filtros
    └── update-product.bru         # PUT - Modificar producto
```

### 📁 Descripción de Carpetas

**01-Endpoints-Categorias/**
Contiene todas las operaciones CRUD para la gestión de categorías del catálogo. Incluye validaciones de campos obligatorios y manejo de relaciones con productos.

**02-Endpoints-Productos/**
Gestiona el ciclo de vida completo del inventario de productos. Incluye funcionalidades avanzadas de búsqueda, filtrado por precio, y el endpoint relacional que demuestra la implementación del patrón 1:N.

---

## 🔗 Endpoints Implementados

### Base URL
```
Production:  https://api.store-example.com/v1
Development: http://localhost:3000
```

### 📂 Módulo: Categorías (`01-Endpoints-Categorias`)

Gestión integral de las secciones del catálogo de productos.

| Endpoint | Método | Descripción | Auth |
|----------|--------|-------------|------|
| `/categories` | GET | Listado completo de categorías disponibles | No |
| `/categories/{id}` | GET | Consulta de categoría específica por ID | No |
| `/categories` | POST | Creación de nueva categoría en el sistema | No |
| `/categories/{id}` | PUT | Actualización completa de datos de categoría | No |
| `/categories/{id}` | DELETE | Eliminación lógica de categoría | No |

#### Operaciones Disponibles

* **get-all-categories:** Recupera el catálogo completo de categorías. Útil para mostrar menús de navegación.
* **get-category-by-id:** Búsqueda específica por identificador único. Retorna 404 si no existe.
* **create-category:** Alta de nuevas secciones con validación de campos obligatorios (nombre mínimo 3 caracteres).
* **update-category:** Actualización completa usando método PUT para reemplazo total del recurso.
* **delete-category:** Baja lógica del sistema. **Nota:** En producción debería verificar que no tenga productos asociados.

### 🛍️ Módulo: Productos (`02-Endpoints-Productos`)

Gestión del inventario completo con capacidades de búsqueda y filtrado profesional.

| Endpoint | Método | Descripción | Auth |
|----------|--------|-------------|------|
| `/products` | GET | Catálogo completo con búsqueda avanzada | No |
| `/products/{id}` | GET | Detalle completo de un producto | No |
| `/products` | POST | Registro de nuevo producto (requiere categoryId) | No |
| `/products/{id}` | PUT | Actualización de precio, stock y datos | No |
| `/products/{id}` | DELETE | Baja de producto del inventario | No |
| `/categories/{id}/products` | GET | **Endpoint relacional:** Productos de una categoría | No |

#### Operaciones Disponibles

* **get-all-products:** Inventario completo del catálogo. Retorna todos los productos disponibles.
* **get-products-filtered:** Búsqueda avanzada con parámetros query:
  * `search`: Búsqueda por texto en nombre del producto
  * `min_price` / `max_price`: Filtrado por rango de precios
  * `limit`: Paginación de resultados (default: 10)
* **get-product-by-id:** Consulta detallada incluyendo nombre, precio, stock y categoría asociada.
* **create-product:** Alta de productos vinculados mediante `categoryId` (Foreign Key).
* **update-product:** Modificación de precios, stock y categoría.
* **delete-product:** Eliminación del inventario.

### 🔄 Endpoint Relacional (1:N)

**GET `/categories/{id}/products`**

Este es el endpoint clave que implementa la relación Uno a Muchos:
```json
// Request
GET /categories/1/products

// Response 200 OK
[
  {
    "id": 101,
    "name": "Smart TV 55 Pulgadas",
    "price": 450.50,
    "stock": 25,
    "categoryId": 1
  },
  {
    "id": 102,
    "name": "Laptop Gaming Pro",
    "price": 1200.00,
    "stock": 15,
    "categoryId": 1
  }
]
```

**Características:**
- Filtra automáticamente productos por `categoryId`
- Retorna array vacío `[]` si la categoría no tiene productos
- Retorna `404` si la categoría no existe
- Mantiene consistencia referencial

---

## 📊 Modelo de Datos

### 📂 Entidad: Categoría

Representa una sección o clasificación del catálogo de productos.

**Diagrama de Campos:**
```
Category
├── id: integer (PK, Auto-increment)
├── name: string (required, 3-200 chars)
└── description: string (optional)
```

**Especificación de Campos:**

| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| `id` | integer | PK, Auto-increment, Read-only | Identificador único generado por el sistema |
| `name` | string | Required, Min: 3, Max: 200 | Nombre de la categoría (Ej: Electrónica, Hogar) |
| `description` | string | Optional | Descripción detallada de la categoría |

**Validaciones de Negocio:**

* El `name` debe tener mínimo 3 caracteres para evitar categorías ambiguas
* El `name` debe ser único en el sistema (no permitir duplicados)
* La `description` es opcional pero recomendada para mejorar UX

**Ejemplo JSON Completo:**
```json
{
  "id": 1,
  "name": "Electrónica",
  "description": "Dispositivos electrónicos y gadgets tecnológicos"
}
```

---

### 🛍️ Entidad: Producto

Representa un artículo disponible para la venta en el inventario.

**Diagrama de Campos:**
```
Product
├── id: integer (PK, Auto-increment)
├── name: string (required, 3-200 chars)
├── price: number (required, > 0)
├── stock: integer (optional, >= 0)
└── categoryId: integer (FK → Category.id, required)
```

**Especificación de Campos:**

| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| `id` | integer | PK, Auto-increment, Read-only | Identificador único del producto |
| `name` | string | Required, Min: 3, Max: 200 | Nombre comercial del producto |
| `price` | number | Required, Min: 0.01, Format: decimal(10,2) | Precio de venta en USD |
| `stock` | integer | Optional, Min: 0 | Unidades disponibles en inventario |
| `categoryId` | integer | Required, FK → Category.id | **Clave foránea** que establece la relación 1:N |

**Validaciones de Negocio:**

* La `categoryId` debe existir en la tabla Categories (integridad referencial)
* El `price` debe ser mayor a cero (no se permiten productos gratis)
* El `stock`, si se proporciona, debe ser un número entero no negativo
* El `name` debe ser único dentro de la misma categoría (opcional, según reglas de negocio)
* No se puede crear un producto "huérfano" (sin categoría asociada)

**Relaciones:**
```
Product.categoryId → Category.id (FOREIGN KEY)
  ON DELETE RESTRICT    # No permitir eliminar categorías con productos
  ON UPDATE CASCADE     # Actualizar si cambia el ID de categoría
```

**Ejemplo JSON Completo:**
```json
{
  "id": 101,
  "name": "Smart TV 55 Pulgadas Samsung",
  "price": 450.50,
  "stock": 25,
  "categoryId": 1
}
```

**Ejemplo con Stock Bajo:**
```json
{
  "id": 102,
  "name": "Laptop Gaming ASUS ROG",
  "price": 1200.00,
  "stock": 3,
  "categoryId": 1
}
```

---

## 🔄 Relación 1 a Muchos: Implementación Detallada

### 📐 Diagrama de Relación
```
┌─────────────────────┐
│      Category       │
│  (Tabla Principal)  │
├─────────────────────┤
│ 🔑 id (PK)          │
│ 📝 name             │
│ 📄 description      │
└─────────────────────┘
         │ 1
         │
         │ tiene
         │
         │ N
┌─────────────────────┐
│      Product        │
│  (Tabla Dependiente)│
├─────────────────────┤
│ 🔑 id (PK)          │
│ 🏷️ name             │
│ 💰 price            │
│ 📦 stock            │
│ 🔗 categoryId (FK) ─┘
└─────────────────────┘
```

### 🎯 Concepto de la Relación

**Definición:** Una relación 1:N significa que:

1. **Una entidad principal (Categoría) puede estar relacionada con MÚLTIPLES entidades dependientes (Productos)**
   - Ejemplo: La categoría "Electrónica" puede tener 50 productos diferentes
   - No hay límite en el número de productos por categoría

2. **Cada entidad dependiente (Producto) pertenece a EXACTAMENTE UNA entidad principal (Categoría)**
   - Ejemplo: El producto "Smart TV 55 Pulgadas" pertenece solo a "Electrónica"
   - No puede existir un producto sin categoría asociada (integridad referencial)

### 🔧 Implementación Técnica

**Clave Foránea (Foreign Key):**

El campo `categoryId` en la tabla Product actúa como clave foránea que:
- Referencia el campo `id` de la tabla Category
- Garantiza que solo se puedan crear productos para categorías existentes
- Permite consultas relacionales eficientes mediante JOIN

**Reglas de Cascada:**
```sql
-- Conceptual (no implementado en este proyecto, pero ilustrativo)
ALTER TABLE Product
ADD CONSTRAINT fk_category
FOREIGN KEY (categoryId) REFERENCES Category(id)
  ON DELETE RESTRICT   -- Prevenir eliminar categorías con productos
  ON UPDATE CASCADE;   -- Si cambia el ID de categoría, actualizar en productos
```

### 📝 Flujo de Trabajo Completo

#### Paso 1: Crear Categoría Principal
```http
POST /categories
Content-Type: application/json

{
  "name": "Electrónica",
  "description": "Dispositivos electrónicos y gadgets tecnológicos"
}

// Respuesta
HTTP/1.1 201 Created
{
  "id": 1,
  "name": "Electrónica",
  "description": "Dispositivos electrónicos y gadgets tecnológicos"
}
```

#### Paso 2: Crear Múltiples Productos Asociados

**Producto 1:**
```http
POST /products
Content-Type: application/json

{
  "name": "Smart TV 55 Pulgadas Samsung",
  "price": 450.50,
  "stock": 25,
  "categoryId": 1  ← Referencia a Electrónica
}

// Respuesta
HTTP/1.1 201 Created
{ "id": 101, ... "categoryId": 1 }
```

**Producto 2:**
```http
POST /products
Content-Type: application/json

{
  "name": "Laptop Gaming ASUS ROG",
  "price": 1200.00,
  "stock": 15,
  "categoryId": 1  ← Misma categoría
}

// Respuesta
HTTP/1.1 201 Created
{ "id": 102, ... "categoryId": 1 }
```

**Producto 3:**
```http
POST /products
Content-Type: application/json

{
  "name": "Auriculares Bluetooth Sony",
  "price": 89.99,
  "stock": 50,
  "categoryId": 1  ← Misma categoría
}

// Respuesta
HTTP/1.1 201 Created
{ "id": 103, ... "categoryId": 1 }
```

#### Paso 3: Consultar Todos los Productos de la Categoría
```http
GET /categories/1/products

// Respuesta
HTTP/1.1 200 OK
[
  {
    "id": 101,
    "name": "Smart TV 55 Pulgadas Samsung",
    "price": 450.50,
    "stock": 25,
    "categoryId": 1
  },
  {
    "id": 102,
    "name": "Laptop Gaming ASUS ROG",
    "price": 1200.00,
    "stock": 15,
    "categoryId": 1
  },
  {
    "id": 103,
    "name": "Auriculares Bluetooth Sony",
    "price": 89.99,
    "stock": 50,
    "categoryId": 1
  }
]
```

#### Paso 4: Intentar Eliminar Categoría (Protección)
```http
DELETE /categories/1

// Respuesta (con validación de integridad)
HTTP/1.1 400 Bad Request
{
  "error": "Bad Request",
  "message": "No se puede eliminar la categoría porque tiene 3 productos asociados",
  "statusCode": 400
}

// Alternativa: Primero eliminar productos, luego categoría
DELETE /products/101
DELETE /products/102
DELETE /products/103
DELETE /categories/1  // Ahora sí se puede eliminar
```

### ⚠️ Validaciones de Integridad

**Caso 1: Intento de crear producto con categoría inexistente**
```http
POST /products
{
  "name": "Producto Huérfano",
  "price": 100.00,
  "categoryId": 999  ← ID no existe
}

// Respuesta
HTTP/1.1 400 Bad Request
{
  "error": "Bad Request",
  "message": "La categoría con ID 999 no existe",
  "statusCode": 400
}
```

**Caso 2: Consulta de productos de categoría sin productos**
```http
GET /categories/5/products

// Respuesta (categoría existe pero está vacía)
HTTP/1.1 200 OK
[]
```

**Caso 3: Consulta de productos de categoría inexistente**
```http
GET /categories/999/products

// Respuesta
HTTP/1.1 404 Not Found
{
  "error": "Not Found",
  "message": "Categoría con ID 999 no encontrada",
  "statusCode": 404
}
```

**Caso 4: Búsqueda avanzada con filtros**
```http
// Buscar productos de "Electrónica" con precio entre $100-$500
GET /products?search=Samsung&min_price=100&max_price=500

// Respuesta
HTTP/1.1 200 OK
[
  {
    "id": 101,
    "name": "Smart TV 55 Pulgadas Samsung",
    "price": 450.50,
    "stock": 25,
    "categoryId": 1
  }
]
```

---

## 💎 Características Enterprise (Valor Agregado)

A diferencia de una API básica CRUD, este diseño incluye especificaciones para entornos de producción real:

### 1. 🔍 Búsqueda y Filtrado Avanzado

**Endpoint:** `GET /products` con parámetros query opcionales

**Filtros implementados:**
```http
// Búsqueda por texto en nombre del producto
GET /products?search=laptop

// Filtrado por rango de precios
GET /products?min_price=100&max_price=1000

// Combinación de filtros
GET /products?search=samsung&min_price=300&max_price=600

// Paginación de resultados
GET /products?limit=5

// Filtro completo: buscar TVs entre $400-$500, máximo 10 resultados
GET /products?search=tv&min_price=400&max_price=500&limit=10
```

**Ejemplo de respuesta filtrada:**
```json
[
  {
    "id": 101,
    "name": "Smart TV 55 Pulgadas Samsung",
    "price": 450.50,
    "stock": 25,
    "categoryId": 1
  },
  {
    "id": 104,
    "name": "Smart TV 43 Pulgadas LG",
    "price": 420.00,
    "stock": 30,
    "categoryId": 1
  }
]
```

**Casos de uso reales:**
- Cliente busca "laptop" en el catálogo → `?search=laptop`
- Filtrar productos por presupuesto → `?min_price=500&max_price=1000`
- Mostrar solo primeros 10 resultados → `?limit=10`
- Búsqueda de regalos en rango de precio → `?min_price=50&max_price=150`

### 2. 🛡️ Manejo de Errores Profesional

Todos los endpoints implementan respuestas de error consistentes según el estándar RFC 7807:

**Estructura estándar de error:**
```json
{
  "error": "Bad Request",
  "message": "El campo 'name' es obligatorio",
  "statusCode": 400,
  "timestamp": "2024-11-15T10:30:00Z",
  "path": "/products"
}
```

**Códigos HTTP implementados:**

| Código | Nombre | Uso en la API | Ejemplo |
|--------|--------|---------------|---------|
| 200 | OK | Operaciones GET/PUT exitosas | Listar productos, actualizar categoría |
| 201 | Created | POST exitoso con nuevo recurso | Crear producto o categoría |
| 204 | No Content | DELETE exitoso sin contenido | Eliminar producto |
| 400 | Bad Request | Datos inválidos o incompletos | Falta campo obligatorio, precio negativo |
| 404 | Not Found | Recurso no existe | Producto ID 999 no encontrado |
| 422 | Unprocessable Entity | Validación de negocio fallida | CategoryId no existe |
| 500 | Internal Server Error | Error del servidor | Error de base de datos |

**Ejemplos de errores por escenario:**
```json
// Error 400: Campo obligatorio faltante
POST /products
{
  "name": "Laptop"
  // Falta price y categoryId
}

Response:
{
  "error": "Bad Request",
  "message": "Los campos 'price' y 'categoryId' son obligatorios",
  "statusCode": 400
}

// Error 404: Recurso no encontrado
GET /products/9999

Response:
{
  "error": "Not Found",
  "message": "Producto con ID 9999 no encontrado",
  "statusCode": 404
}

// Error 422: Validación de negocio
POST /products
{
  "name": "Mouse",
  "price": 25.00,
  "categoryId": 999  // Categoría no existe
}

Response:
{
  "error": "Unprocessable Entity",
  "message": "La categoría con ID 999 no existe",
  "statusCode": 422
}
```

### 3. 📖 Documentación Interactiva

El archivo `store-api.yaml` incluye especificaciones detalladas según OpenAPI 3.0:

**Características de la documentación:**

✅ **Descripciones en Markdown** para cada endpoint
✅ **Ejemplos de request/response** para todos los casos de uso
✅ **Parámetros query documentados** con tipos y valores por defecto
✅ **Esquemas reutilizables** (components/schemas)
✅ **Códigos de error documentados** con descripciones
✅ **Servidores múltiples** (producción y desarrollo)

**Ejemplo de documentación en Swagger:**
```yaml
paths:
  /products:
    get:
      summary: Catálogo de productos (Búsqueda Avanzada)
      description: |
        Obtiene productos con opciones de filtrado.
        Permite buscar por nombre, rango de precios y paginar resultados.
        
        **Ejemplos de uso:**
```
        GET /products?search=laptop&min_price=500&max_price=1500
        GET /products?limit=5
```
      parameters:
        - name: search
          in: query
          description: Buscar por nombre del producto
          schema:
            type: string
          example: "laptop"
        - name: min_price
          in: query
          description: Precio mínimo
          schema:
            type: number
          example: 100
```

### 4. 🔐 Preparación para Autenticación (Future Enhancement)

Aunque no implementada en esta versión, la API está diseñada para incorporar:

**Autenticación con JWT:**
```http
POST /auth/login
{
  "email": "admin@techstore.com",
  "password": "***"
}

// Respuesta
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "...",
  "user": {
    "id": 1,
    "role": "admin"
  }
}

// Uso en requests protegidos
POST /products
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Roles sugeridos:**
- `admin`: Acceso completo (CRUD de categorías y productos)
- `manager`: Gestión de productos, solo lectura de categorías
- `customer`: Solo lectura del catálogo

### 5. 📊 Versionado de API

La API implementa versionado en la URL para mantener compatibilidad hacia atrás:
```
v1 (actual)  → /v1/products
v2 (futuro)  → /v2/products  (con breaking changes)
```

**Política de versionado semántico:**
- **Major (v1 → v2):** Breaking changes (cambio en estructura de datos)
- **Minor (v1.1 → v1.2):** Nuevas features sin romper compatibilidad
- **Patch (v1.1.1 → v1.1.2):** Bugfixes y mejoras menores

**Ejemplos de breaking changes que requerirían v2:**
- Cambiar nombre de campo `categoryId` a `category_id`
- Modificar estructura de respuesta de array a objeto paginado
- Cambiar tipo de dato de `price` de number a string

---

## 🧪 Guía de Pruebas Detallada

### Opción 1: Bruno (Recomendado) 🚀

Bruno es un cliente HTTP moderno, rápido y open-source ideal para desarrollo de APIs.

#### Instalación

1. **Descargar Bruno:**
   - Visita: https://www.usebruno.com/downloads
   - Descarga para tu sistema operativo:
     - 🪟 Windows: `bruno-setup.exe`
     - 🍎 macOS: `bruno.dmg`
     - 🐧 Linux: `bruno.AppImage`

2. **Instalar:**
   - Windows: Ejecuta el instalador y sigue el wizard
   - macOS: Arrastra Bruno a la carpeta Applications
   - Linux: Da permisos de ejecución: `chmod +x bruno.AppImage`

#### Configuración del Proyecto

1. **Abrir Bruno**
2. **Importar colección:**
   - Click en **"Open Collection"** en la barra superior
   - Navega a la carpeta `Proyecto-01`
   - Selecciona la carpeta completa (Bruno detectará `bruno.json`)
   - Click en **"Open"**

3. **Estructura visible en Bruno:**
```
   📂 Proyecto-01
   ├── 📁 01-Endpoints-Categorias
   │   ├── 📄 GET - Listar Categorías
   │   ├── 📄 GET - Buscar Categoría por ID
   │   ├── 📄 POST - Crear Categoría
   │   ├── 📄 PUT - Actualizar Categoría
   │   └── 📄 DELETE - Eliminar Categoría
   │
   └── 📁 02-Endpoints-Productos
       ├── 📄 GET - Catálogo Completo
       ├── 📄 GET - Búsqueda Filtrada (Avanzada)
       ├── 📄 GET - Detalle de Producto
       ├── 📄 GET - Productos por Categoría (1:N)
       ├── 📄 POST - Crear Producto
       ├── 📄 PUT - Actualizar Producto
       └── 📄 DELETE - Eliminar Producto
```

### Opción 2: Usando Swagger UI

1. **Visualizar la documentación:**
   - Abre https://editor.swagger.io/
   - Copia el contenido de `job-board-api.yaml`
   - Pégalo en el editor

2. **Probar endpoints:**
   - Click en cualquier endpoint (GET, POST, etc.)
   - Click en "Try it out"
   - Completa los parámetros requeridos
   - Click en "Execute"
   - Observa la respuesta simulada



## 📚 Recursos Adicionales

### Documentación REST
- [REST API Tutorial](https://restfulapi.net/)
- [HTTP Methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
- [Status Codes](https://httpstatuses.com/)

### Herramientas
- [Bruno](https://www.usebruno.com/) - Cliente API open-source
- [Swagger Editor](https://editor.swagger.io/) - Editor OpenAPI
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API de prueba

### Aprendizaje
- [OpenAPI Specification](https://swagger.io/specification/)
- [RESTful Best Practices](https://restfulapi.net/rest-api-design-tutorial-with-example/)

---

## 📞 Contacto y Soporte

**Desarrollado por:** 
*Joel Patricio Quilumba Morocho*

**Institución:** Escuela Politécnica Nacional  
**Curso:** Aplicaciones Web - GR1SW  
**Fecha:** Noviembre 2025  

---

**¡Gracias por revisar nuestro proyecto! 🚀**