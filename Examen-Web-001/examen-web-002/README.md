# ⚽ Sistema de Gestión de Equipos y Jugadores

Una API REST robusta construida con tecnologías modernas para administrar equipos de fútbol y sus plantillas de jugadores.

---

## 🎯 Acerca del Proyecto

Este proyecto implementa un sistema backend completo para la gestión de equipos deportivos y sus respectivos jugadores. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre ambas entidades, manteniendo la integridad relacional entre equipos y sus jugadores.

### Características Principales

- Sistema de gestión completo para equipos deportivos
- Administración de jugadores vinculados a equipos
- Arquitectura RESTful siguiendo mejores prácticas
- Base de datos relacional con SQLite
- Relaciones bidireccionales entre entidades

---

## 🚀 Stack Tecnológico

El proyecto está desarrollado utilizando las siguientes tecnologías:

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| NestJS | 10.2.10 | Framework principal del backend |
| TypeORM | 0.3.17 | Mapeo objeto-relacional |
| SQLite | 5.1.6 | Sistema de base de datos |
| TypeScript | 5.2.2 | Lenguaje de desarrollo |

---

## ⚙️ Configuración Inicial

### Prerrequisitos

Asegúrate de tener instalado:
- Node.js versión 16 o superior
- npm (incluido con Node.js) o yarn como gestor de paquetes

### Instalación Paso a Paso

**1.** Clona o descarga el repositorio en tu máquina local

**2.** Accede al directorio del proyecto:
```bash
cd examen-web-002
```

**3.** Instala todas las dependencias necesarias:
```bash
npm install
```

**4.** La base de datos SQLite se generará automáticamente en la primera ejecución

---

## 💻 Comandos de Ejecución

### Entorno de Desarrollo
Ejecuta la aplicación con recarga automática de cambios:
```bash
npm run start:dev
```

### Compilación
Genera los archivos de producción:
```bash
npm run build
```

### Entorno de Producción
Ejecuta la versión optimizada:
```bash
npm run start:prod
```

> 🌐 La API estará disponible en: **http://localhost:3000**

---

## 📂 Arquitectura del Proyecto

```
src/
│
├── entities/
│   ├── team.entity.ts        → Definición de la entidad Equipo
│   └── player.entity.ts      → Definición de la entidad Jugador
│
├── dtos/
│   ├── team.dto.ts           → Objetos de transferencia para Equipos
│   └── player.dto.ts         → Objetos de transferencia para Jugadores
│
├── teams/
│   ├── teams.controller.ts   → Controlador de endpoints de equipos
│   ├── teams.service.ts      → Lógica de negocio de equipos
│   └── teams.module.ts       → Módulo de equipos
│
├── players/
│   ├── players.controller.ts → Controlador de endpoints de jugadores
│   ├── players.service.ts    → Lógica de negocio de jugadores
│   └── players.module.ts     → Módulo de jugadores
│
├── app.module.ts             → Módulo raíz de la aplicación
└── main.ts                   → Archivo de entrada principal
```

---

## 🔌 Documentación de Endpoints

### Endpoints de Equipos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/teams` | Lista todos los equipos registrados |
| GET | `/teams/:id` | Obtiene la información de un equipo específico |
| GET | `/teams/:id/players` | Consulta todos los jugadores de un equipo |
| POST | `/teams` | Registra un nuevo equipo |
| PUT | `/teams/:id` | Modifica los datos de un equipo |
| DELETE | `/teams/:id` | Elimina un equipo del sistema |

### Endpoints de Jugadores

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/players` | Lista todos los jugadores registrados |
| GET | `/players/:id` | Obtiene la información de un jugador específico |
| POST | `/players` | Registra un nuevo jugador |
| PUT | `/players/:id` | Modifica los datos de un jugador |
| DELETE | `/players/:id` | Elimina un jugador del sistema |

---

## 📋 Ejemplos de Uso

### Crear un Equipo Nuevo

**Request:**
```bash
POST /teams
Content-Type: application/json

{
  "name": "Liverpool FC",
  "country": "Inglaterra"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Liverpool FC",
  "country": "Inglaterra",
  "players": []
}
```

### Registrar un Jugador

**Request:**
```bash
POST /players
Content-Type: application/json

{
  "name": "Mohamed Salah",
  "position": "Extremo Derecho",
  "teamId": 1
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Mohamed Salah",
  "position": "Extremo Derecho",
  "teamId": 1,
  "team": {
    "id": 1,
    "name": "Liverpool FC",
    "country": "Inglaterra"
  }
}
```

### Consultar Jugadores de un Equipo

**Request:**
```bash
GET /teams/1/players
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Mohamed Salah",
    "position": "Extremo Derecho",
    "teamId": 1
  },
  {
    "id": 2,
    "name": "Virgil van Dijk",
    "position": "Defensa Central",
    "teamId": 1
  }
]
```

---

## 🗃️ Modelo de Datos

### Entidad: Team (Equipo)

| Campo | Tipo | Restricción | Descripción |
|-------|------|-------------|-------------|
| id | Integer | PRIMARY KEY | Identificador único autogenerado |
| name | String | NOT NULL | Nombre del equipo |
| country | String | NOT NULL | País de origen |
| players | Relation | ONE TO MANY | Jugadores asociados |

### Entidad: Player (Jugador)

| Campo | Tipo | Restricción | Descripción |
|-------|------|-------------|-------------|
| id | Integer | PRIMARY KEY | Identificador único autogenerado |
| name | String | NOT NULL | Nombre del jugador |
| position | String | NOT NULL | Posición en el campo |
| teamId | Integer | FOREIGN KEY | Referencia al equipo |
| team | Relation | MANY TO ONE | Equipo al que pertenece |

---

## 🛡️ Manejo de Errores

La API implementa respuestas HTTP estándar:

| Código | Significado |
|--------|-------------|
| 200 | Petición procesada correctamente |
| 201 | Recurso creado exitosamente |
| 400 | Datos de entrada inválidos |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

---

## 🧪 Testing con cURL

### Operaciones con Equipos

```bash
# Listar equipos
curl http://localhost:3000/teams

# Crear equipo
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name":"Paris Saint-Germain","country":"Francia"}'

# Actualizar equipo
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"PSG","country":"Francia"}'

# Eliminar equipo
curl -X DELETE http://localhost:3000/teams/1
```

### Operaciones con Jugadores

```bash
# Listar jugadores
curl http://localhost:3000/players

# Crear jugador
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name":"Kylian Mbappé","position":"Delantero","teamId":1}'

# Actualizar jugador
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"position":"Extremo Izquierdo"}'

# Eliminar jugador
curl -X DELETE http://localhost:3000/players/1
```

---

## 📊 Características Técnicas

### Implementadas

- ✅ Operaciones CRUD completas para ambas entidades
- ✅ Relaciones bidireccionales entre equipos y jugadores
- ✅ Carga automática de relaciones (eager loading)
- ✅ Sincronización automática del esquema de base de datos
- ✅ Validación de integridad referencial
- ✅ Configuración de CORS habilitada
- ✅ Arquitectura modular y escalable
- ✅ Inyección de dependencias

### Próximas Mejoras

- 🔄 Implementación de validadores con class-validator
- 🔄 Sistema de paginación para listados extensos
- 🔄 Autenticación y autorización con JWT
- 🔄 Suite de tests unitarios y de integración
- 🔄 Documentación interactiva con Swagger
- 🔄 Sistema de logging estructurado

---

## 📖 Scripts Disponibles

```bash
npm run build       # Compila el proyecto TypeScript
npm run start       # Inicia el servidor
npm run start:dev   # Modo desarrollo con hot-reload
npm run start:prod  # Inicia versión de producción
npm run lint        # Analiza el código con ESLint
npm test            # Ejecuta la suite de pruebas
```

---

## 💾 Base de Datos

El proyecto utiliza SQLite como motor de base de datos. El archivo `db.sqlite` se crea automáticamente en el directorio raíz al iniciar la aplicación por primera vez. TypeORM se encarga de crear y sincronizar las tablas según las entidades definidas.

---

## 👨‍💻 Autor

**Joel Quilumba**  
Desarrollado como examen académico para Escuela Politécnica Nacional - Aplicaciones Web GR1SW

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

---

## Agradecimientos

Examen desarrollado aplicando los conocimientos adquiridos en el curso de Desarrollo de Aplicaciones Web.

---

> **Nota:** Este proyecto es de carácter académico y educativo.