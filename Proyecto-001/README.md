# API REST - Proyecto de Aplicaciones Web (2 Bimestre)

## 🏆 API REST - Sistema de Gestión Deportiva con Documentación Interactiva

Plataforma backend completa para la administración de equipos y jugadores de fútbol, equipada con documentación automática mediante Swagger/OpenAPI.

---

## 🎯 Descripción General

Este proyecto consiste en una API RESTful robusta que permite gestionar información de equipos deportivos y sus respectivos jugadores. La aplicación incluye documentación interactiva en tiempo real, facilitando la exploración y prueba de todos los endpoints disponibles sin necesidad de herramientas externas.

**Características destacadas:**
- Documentación automática con Swagger UI
- Arquitectura modular y escalable
- Base de datos SQLite integrada
- Validación de datos con DTOs
- Operaciones CRUD completas

---

## 🛠️ Stack Tecnológico

El proyecto implementa las siguientes tecnologías:

| Herramienta | Propósito |
|------------|-----------|
| **NestJS** | Framework backend progresivo basado en Node.js |
| **TypeORM** | ORM (Object-Relational Mapping) para gestión de base de datos |
| **SQLite** | Sistema de base de datos relacional embebido |
| **Swagger/OpenAPI** | Generación automática de documentación interactiva |
| **TypeScript** | Lenguaje tipado para desarrollo robusto |

---

## ⚡ Instalación y Configuración

### Paso 1: Navegar al directorio del proyecto

```bash
cd "SEGUNDO BIMESTRE/Proyecto-001"
```

### Paso 2: Instalar dependencias principales

```bash
npm install
```

### Paso 3: Instalar módulo de documentación Swagger

```bash
npm install @nestjs/swagger swagger-ui-express
```

---

## 🚀 Ejecutar la Aplicación

### Entorno de Desarrollo (con recarga automática)

```bash
npm run start:dev
```

### Compilar para Producción

```bash
npm run build
```

### Ejecutar en Producción

```bash
npm run start:prod
```

> El servidor estará disponible en **http://localhost:3000**

---

## 📖 Acceso a la Documentación Interactiva

Una vez iniciado el servidor, podrás acceder a la interfaz de Swagger en:

```
🌐 http://localhost:3000/api
```

### ¿Qué puedes hacer en Swagger UI?

✅ Explorar todos los endpoints disponibles organizados por categorías  
✅ Ejecutar peticiones HTTP directamente desde el navegador  
✅ Visualizar modelos de datos con sus propiedades y tipos  
✅ Revisar ejemplos de peticiones y respuestas  
✅ Entender los códigos de estado HTTP de cada operación  
✅ Probar la API sin necesidad de Postman o herramientas similares  

---

## 🔌 Rutas de la API

### 📋 Gestión de Equipos

| Método HTTP | Endpoint | Descripción |
|-------------|----------|-------------|
| `GET` | `/teams` | Recupera la lista completa de equipos |
| `GET` | `/teams/:id` | Consulta un equipo específico por su ID |
| `POST` | `/teams` | Registra un nuevo equipo en el sistema |
| `PUT` | `/teams/:id` | Actualiza la información de un equipo |
| `DELETE` | `/teams/:id` | Elimina un equipo del sistema |
| `GET` | `/teams/:id/players` | Obtiene todos los jugadores de un equipo |

### ⚽ Gestión de Jugadores

| Método HTTP | Endpoint | Descripción |
|-------------|----------|-------------|
| `GET` | `/players` | Recupera la lista completa de jugadores |
| `GET` | `/players/:id` | Consulta un jugador específico por su ID |
| `POST` | `/players` | Registra un nuevo jugador en el sistema |
| `PUT` | `/players/:id` | Actualiza la información de un jugador |
| `DELETE` | `/players/:id` | Elimina un jugador del sistema |

---

## 💻 Ejemplos de Implementación

### Controlador con Documentación Swagger

```typescript
@Post()
@ApiOperation({ summary: 'Registrar un nuevo equipo en el sistema' })
@ApiResponse({
  status: 201,
  description: 'El equipo ha sido creado exitosamente',
  type: Team,
})
@ApiResponse({
  status: 400,
  description: 'Datos de entrada inválidos',
})
create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
  return this.teamsService.create(createTeamDto);
}
```

### DTO con Anotaciones de Documentación

```typescript
export class CreateTeamDto {
  @ApiProperty({ 
    example: 'Atlético de Madrid',
    description: 'Nombre oficial del equipo'
  })
  name: string;

  @ApiProperty({ 
    example: 'España',
    description: 'País de origen del equipo'
  })
  country: string;
}
```

---

## ⚙️ Configuración de Swagger

La documentación se configura en el archivo principal `src/main.ts`:

```typescript
const swaggerConfig = new DocumentBuilder()
  .setTitle('API - Gestión de Equipos y Jugadores')
  .setDescription('Documentación completa de endpoints RESTful para administración deportiva')
  .setVersion('1.0')
  .addTag('Teams', 'Operaciones relacionadas con equipos')
  .addTag('Players', 'Operaciones relacionadas con jugadores')
  .build();

const documentacion = SwaggerModule.createDocument(app, swaggerConfig);
SwaggerModule.setup('api', app, documentacion);
```

---

## 📁 Organización del Proyecto

```
src/
│
├── main.ts                          # Bootstrap de la aplicación + configuración Swagger
├── app.module.ts                    # Módulo raíz que conecta todos los módulos
│
├── entities/                        # Definición de entidades de base de datos
│   ├── team.entity.ts              # Modelo de datos para equipos
│   └── player.entity.ts            # Modelo de datos para jugadores
│
├── teams/                          # Módulo completo de equipos
│   ├── dto/
│   │   ├── create-team.dto.ts     # DTO para creación de equipos
│   │   └── update-team.dto.ts     # DTO para actualización de equipos
│   ├── teams.controller.ts        # Controlador de rutas HTTP
│   ├── teams.service.ts           # Lógica de negocio
│   └── teams.module.ts            # Configuración del módulo
│
└── players/                        # Módulo completo de jugadores
    ├── dto/
    │   ├── create-player.dto.ts   # DTO para creación de jugadores
    │   └── update-player.dto.ts   # DTO para actualización de jugadores
    ├── players.controller.ts      # Controlador de rutas HTTP
    ├── players.service.ts         # Lógica de negocio
    └── players.module.ts          # Configuración del módulo
```

---

## 🎨 Decoradores de Swagger Utilizados

| Decorador | Función |
|-----------|---------|
| `@ApiTags()` | Agrupa endpoints bajo una categoría común |
| `@ApiOperation()` | Proporciona un resumen descriptivo del endpoint |
| `@ApiResponse()` | Define los posibles códigos de respuesta HTTP |
| `@ApiProperty()` | Documenta propiedades de DTOs con ejemplos |
| `@ApiParam()` | Describe parámetros de ruta |
| `@ApiBody()` | Especifica el esquema del cuerpo de la petición |

---

## 🔍 Ventajas de la Documentación con Swagger

1. **Interfaz Visual Intuitiva** - Navegación fácil por todos los endpoints
2. **Testing Integrado** - Prueba la API sin salir del navegador
3. **Actualización Automática** - La documentación se genera desde el código
4. **Estandarización** - Sigue la especificación OpenAPI 3.0
5. **Colaboración Mejorada** - Facilita el trabajo en equipo
6. **Reducción de Errores** - Validación visual de esquemas de datos

---

## 📚 Recursos Adicionales

Para profundizar en las tecnologías utilizadas:

- 📘 [Documentación Oficial de NestJS](https://docs.nestjs.com/)
- 📗 [Swagger con NestJS - Guía Completa](https://docs.nestjs.com/openapi/introduction)
- 📙 [Especificación OpenAPI 3.0](https://swagger.io/specification/)
- 📕 [TypeORM - Documentación](https://typeorm.io/)

---

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte de las actividades académicas del curso de **Aplicaciones Web GR1SW** en la **Escuela Politécnica Nacional**.

---

## 👨‍💻 Desarrollador

**Joel Quilumba**  
Estudiante de Ingeniería en Computacion  
Escuela Politécnica Nacional - Aplicaciones Web GR1SW

---

## 📝 Notas Importantes

- La base de datos SQLite (`db.sqlite`) se genera automáticamente al ejecutar la aplicación
- Las tablas se crean y sincronizan automáticamente gracias a TypeORM
- CORS está habilitado para permitir peticiones desde diferentes orígenes
- La documentación Swagger se actualiza automáticamente al modificar el código

---

## 📄 Licencia

Proyecto de código abierto bajo Licencia MIT.

---

> 💡 **Consejo:** Explora la documentación interactiva en `/api` para familiarizarte rápidamente con todos los endpoints disponibles.
