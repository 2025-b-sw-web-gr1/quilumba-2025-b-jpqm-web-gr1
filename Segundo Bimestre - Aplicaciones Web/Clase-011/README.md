# Clase-011: Login con Sesiones en NestJS (FileStore)

## 🎯 Descripción General

Este documento detalla la implementación de un sistema de autenticación básico utilizando **Express Session** y **File Store** en NestJS. El objetivo es manejar sesiones persistentes en archivos y restringir el acceso si ya existe una sesión activa.

**Características destacadas:**
- Autenticación con sesiones persistentes
- Almacenamiento de sesiones en archivos (FileStore)
- Validación de sesión activa
- Manejo de login, logout y estado de sesión
- Configuración de cookies seguras

---

## 🛠️ Stack Tecnológico

| Herramienta | Propósito |
|------------|-----------|
| **NestJS** | Framework backend progresivo basado en Node.js |
| **Express Session** | Middleware para manejo de sesiones |
| **Session File Store** | Almacenamiento de sesiones en archivos JSON |
| **TypeScript** | Lenguaje tipado para desarrollo robusto |

---

## ⚡ Instalación y Configuración

### Paso 1: Instalar dependencias principales

```bash
# Instalar librería de sesiones y el driver de archivos
npm install express-session session-file-store

# Instalar los tipos de TypeScript (necesario para evitar errores de compilación)
npm install -D @types/express-session @types/session-file-store
```

---

## 📝 Código Fuente

### A. Definición de Tipos

**Archivo:** `src/types.d.ts`  
*(Necesario para extender la interfaz de SessionData)*

```typescript
import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user: string;
  }
}
```

---

### B. Configuración del Módulo Principal

**Archivo:** `src/main.ts`  
*(Configuración del middleware de sesión y FileStore)*

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import FileStore from 'session-file-store';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const FileStoreSession = FileStore(session);

  app.use(
    session({
      store: new FileStoreSession({
        path: './sessions', // Carpeta donde se guardan los archivos JSON
        ttl: 3600, // 1 hora
        retries: 0,
      }),
      secret: 'mi_secreto_super_seguro',
      resave: false,
      saveUninitialized: false,
      cookie: { 
        maxAge: 3600000, // 1 hora en milisegundos
        httpOnly: true, // Previene acceso desde JavaScript del cliente
      }, 
    }),
  );

  await app.listen(3000);
}
bootstrap();
```

---

### C. Controlador de Autenticación

**Archivo:** `src/auth.controller.ts`  
*(Manejo de Login, Logout y Validación de sesión existente)*

```typescript
import { Controller, Post, Req, Res, HttpStatus, Get } from '@nestjs/common';
import type { Request, Response } from 'express'; // Importación como 'type'

@Controller('auth')
export class AuthController {
  
  @Post('login')
  login(@Req() req: Request, @Res() res: Response) {
    const { username, password } = req.body;

    // 1. Validar si ya existe sesión
    if (req.session.user) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Ya existe una sesión activa. Por favor, deslogueate primero.',
        currentUser: req.session.user
      });
    }

    // 2. Validar credenciales (Quemadas)
    if (username === 'admin' && password === '12345678') {
      req.session.user = 'admin'; // Guardar en sesión
      return res.status(HttpStatus.OK).json({ 
        message: 'Login exitoso', 
        user: req.session.user 
      });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ 
        message: 'Credenciales inválidas' 
      });
    }
  }

  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ 
            message: 'Error al cerrar sesión' 
          });
        }
        res.clearCookie('connect.sid'); 
        return res.status(HttpStatus.OK).json({ 
          message: 'Sesión cerrada correctamente' 
        });
      });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({ 
        message: 'No hay sesión activa para cerrar' 
      });
    }
  }

  @Get('status')
  status(@Req() req: Request) {
    return {
      user: req.session.user || 'No hay usuario logueado',
      idSesion: req.sessionID
    };
  }
}
```

---

### D. Registro del Módulo

**Archivo:** `src/app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
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

## 📌 Rutas de la API

### 🔐 Gestión de Autenticación

| Método HTTP | Endpoint | Descripción |
|-------------|----------|-------------|
| `POST` | `/auth/login` | Inicia sesión con credenciales (valida si ya existe sesión activa) |
| `POST` | `/auth/logout` | Cierra la sesión activa y elimina la cookie |
| `GET` | `/auth/status` | Consulta el estado de la sesión actual |

---

## 💻 Pruebas de Funcionamiento

Las pruebas se realizan mediante la consola del navegador (`F12`) para aprovechar el manejo automático de cookies.

### Test 1: Login Exitoso

Abrir el navegador en `http://localhost:3000`, presionar `F12` (Consola) y ejecutar:

```javascript
fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'admin', password: '12345678' })
})
.then(r => r.json())
.then(console.log);
```

**Respuesta esperada:**
```json
{
  "message": "Login exitoso",
  "user": "admin"
}
```

---

### Test 2: Login con Credenciales Inválidas

```javascript
fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'admin', password: 'incorrecta' })
})
.then(r => r.json())
.then(console.log);
```

**Respuesta esperada:**
```json
{
  "message": "Credenciales inválidas"
}
```

---

### Test 3: Validación de Sesión Activa

*(Ejecutar después de un login exitoso, sin hacer logout)*

```javascript
fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'admin', password: '12345678' })
})
.then(r => r.json())
.then(console.log);
```

**Respuesta esperada:**
```json
{
  "message": "Ya existe una sesión activa. Por favor, deslogueate primero.",
  "currentUser": "admin"
}
```

---

### Test 4: Consultar Estado de Sesión

```javascript
fetch('http://localhost:3000/auth/status')
  .then(r => r.json())
  .then(console.log);
```

**Respuesta esperada (con sesión activa):**
```json
{
  "user": "admin",
  "idSesion": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

**Respuesta esperada (sin sesión activa):**
```json
{
  "user": "No hay usuario logueado",
  "idSesion": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

---

### Test 5: Logout

```javascript
fetch('http://localhost:3000/auth/logout', { 
  method: 'POST' 
})
.then(r => r.json())
.then(console.log);
```

**Respuesta esperada:**
```json
{
  "message": "Sesión cerrada correctamente"
}
```

---

### Test 6: Logout sin Sesión Activa

```javascript
fetch('http://localhost:3000/auth/logout', { 
  method: 'POST' 
})
.then(r => r.json())
.then(console.log);
```

**Respuesta esperada:**
```json
{
  "message": "No hay sesión activa para cerrar"
}
```

---

## 🔑 Conceptos Clave

### Session Store

El almacenamiento de sesiones se realiza mediante archivos JSON en la carpeta `./sessions`:

```typescript
store: new FileStoreSession({
  path: './sessions',    // Carpeta de almacenamiento
  ttl: 3600,            // Tiempo de vida: 1 hora
  retries: 0,           // Sin reintentos
})
```

### Configuración de Cookies

```typescript
cookie: { 
  maxAge: 3600000,      // 1 hora en milisegundos
  httpOnly: true,       // Previene acceso desde JavaScript del cliente
}
```

### Validación de Sesión Activa

Requisito específico del profesor: antes de permitir un nuevo login, se verifica si ya existe una sesión:

```typescript
if (req.session.user) {
  return res.status(HttpStatus.BAD_REQUEST).json({
    message: 'Ya existe una sesión activa. Por favor, deslogueate primero.',
    currentUser: req.session.user
  });
}
```

---

## 📁 Organización del Proyecto

```
src/
│
├── main.ts                          # Bootstrap + configuración de sesiones
├── app.module.ts                    # Módulo raíz
│
├── types.d.ts                       # Extensión de tipos de SessionData
│
├── auth.controller.ts               # Controlador de autenticación
│
└── sessions/                        # Carpeta generada automáticamente
    └── *.json                       # Archivos de sesión
```

---

## 🎨 Características Implementadas

✅ Autenticación con credenciales quemadas  
✅ Almacenamiento de sesiones en archivos JSON  
✅ Validación de sesión activa antes de permitir nuevo login  
✅ Manejo de cookies seguras con `httpOnly`  
✅ Endpoints para login, logout y consulta de estado  
✅ Destrucción completa de sesión con limpieza de cookies  
✅ Manejo de errores y respuestas HTTP apropiadas  

---

## 🔒 Credenciales de Prueba

Para probar el sistema de autenticación:

- **Usuario:** `admin`
- **Contraseña:** `12345678`

---

## 📚 Recursos Adicionales

Para profundizar en las tecnologías utilizadas:

- 📘 [Documentación Oficial de NestJS](https://docs.nestjs.com/)
- 📗 [Express Session - NPM](https://www.npmjs.com/package/express-session)
- 📙 [Session File Store - NPM](https://www.npmjs.com/package/session-file-store)
- 📕 [TypeScript Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

---

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte de las actividades académicas del curso de **Aplicaciones Web GR1SW** en la **Escuela Politécnica Nacional**.

---

## 👨‍💻 Desarrollador

**Joel Quilumba**  
Estudiante de Ingeniería en Computación  
Escuela Politécnica Nacional - Aplicaciones Web GR1SW

---

## 📌 Notas Importantes

- La carpeta `./sessions` se genera automáticamente al iniciar la aplicación
- Cada sesión se guarda como un archivo JSON individual en la carpeta `./sessions`
- Las sesiones expiran automáticamente después de 1 hora (configurable con `ttl`)
- La cookie `connect.sid` se utiliza para identificar la sesión del usuario
- El modo `httpOnly` en las cookies previene ataques XSS
- Las pruebas deben realizarse desde la consola del navegador para mantener las cookies

---

## 🔐 Seguridad

### Buenas prácticas implementadas:

- **httpOnly cookies**: Previene acceso malicioso desde JavaScript
- **Secret key**: Utilizada para firmar las cookies de sesión
- **Validación de sesión activa**: Evita múltiples sesiones simultáneas
- **Destrucción completa**: Limpia tanto la sesión como la cookie al hacer logout

### Mejoras recomendadas para producción:

- Usar variables de entorno para el `secret`
- Implementar HTTPS y activar `secure: true` en las cookies
- Utilizar base de datos en lugar de archivos para el almacenamiento
- Implementar rate limiting para prevenir ataques de fuerza bruta
- Agregar validación más robusta de credenciales (hash de contraseñas)

---

## 📄 Licencia

Proyecto de código abierto bajo Licencia MIT.

---
