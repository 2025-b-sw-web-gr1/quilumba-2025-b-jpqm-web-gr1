# Clase-012: Internacionalización (i18n) en NestJS

## 🎯 Descripción General

Este documento detalla la implementación de un servicio básico de internacionalización utilizando **nestjs-i18n**. El objetivo es servir contenido en Español (por defecto) o Inglés dependiendo del idioma del cliente (vía Query Param o Headers).

**Características destacadas:**
- Soporte multiidioma (Español e Inglés)
- Detección automática de idioma mediante query params
- Detección mediante cabeceras HTTP (Accept-Language)
- Idioma por defecto configurable (fallback)
- Recarga en caliente de traducciones en desarrollo

---

## 🛠️ Stack Tecnológico

| Herramienta | Propósito |
|------------|-----------|
| **NestJS** | Framework backend progresivo basado en Node.js |
| **nestjs-i18n** | Librería de internacionalización para NestJS |
| **JSON** | Formato de almacenamiento de traducciones |
| **TypeScript** | Lenguaje tipado para desarrollo robusto |

---

## ⚡ Instalación y Configuración

### Paso 1: Generar proyecto base (si no existe)

```bash
# Crear proyecto base de NestJS
npx @nestjs/cli new .
```

### Paso 2: Instalar dependencias

```bash
# Instalar librería de internacionalización y tipos de Node
npm install nestjs-i18n @types/node
```

---

## 🔧 Configuración del Compilador

Para asegurar que NestJS copie los archivos JSON de traducción a la carpeta `dist` al compilar, debemos modificar el archivo de configuración CLI.

**Archivo:** `nest-cli.json` *(En la raíz del proyecto)*

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "assets": [
      { "include": "i18n/**/*", "watchAssets": true }
    ]
  }
}
```

> ⚠️ **Importante:** Esta configuración es crucial para que los archivos JSON de traducción se copien automáticamente a la carpeta `dist` durante la compilación.

---

## 📁 Estructura de Archivos de Traducción

### Organización de carpetas

Estructura de carpetas requerida dentro de `src/`:

```
src/
└── i18n/
    ├── en/
    │   └── messages.json
    └── es/
        └── messages.json
```

### Archivos de traducción

**Archivo:** `src/i18n/en/messages.json`

```json
{
  "HELLO_WORLD": "Hello World!"
}
```

**Archivo:** `src/i18n/es/messages.json`

```json
{
  "HELLO_WORLD": "¡Hola Mundo!"
}
```

---

## 📝 Código Fuente

### A. Configuración del Módulo

Configuramos `I18nModule` para detectar el idioma mediante parámetros de consulta (`?lang=en`) o cabeceras HTTP (`Accept-Language`).

**Archivo:** `src/app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'es', // Idioma por defecto
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true, // Recargar cambios en caliente
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] }, // Detecta ?lang=xx
        AcceptLanguageResolver,                    // Detecta Header del navegador
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

### B. Servicio con Traducción

Inyectamos `I18nService` para obtener el mensaje traducido según el contexto actual.

**Archivo:** `src/app.service.ts`

```typescript
import { Injectable } from '@nestjs/common';
import { I18nContext, I18nService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}

  getHello(): string {
    // Obtiene el idioma actual del contexto
    const currentLang = I18nContext.current()?.lang;

    // Retorna la traducción de la clave HELLO_WORLD
    return this.i18n.t('messages.HELLO_WORLD', { 
      lang: currentLang 
    });
  }
}
```

---

### C. Controlador (Sin cambios)

**Archivo:** `src/app.controller.ts`

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
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

### 🌍 Endpoint Multiidioma

| Método HTTP | Endpoint | Descripción |
|-------------|----------|-------------|
| `GET` | `/` | Retorna mensaje traducido según el idioma detectado |
| `GET` | `/?lang=en` | Retorna mensaje en inglés (forzado por query param) |
| `GET` | `/?lang=es` | Retorna mensaje en español (forzado por query param) |

---

## 💻 Pruebas de Funcionamiento

Para probar la internacionalización, iniciar el servidor (`npm run start:dev`) y usar las siguientes URLs:

### Test 1: Español (Idioma por defecto - Fallback)

**URL:** `http://localhost:3000/`

**Resultado esperado:**
```
¡Hola Mundo!
```

---

### Test 2: Inglés (Vía Query Param)

**URL:** `http://localhost:3000/?lang=en`

**Resultado esperado:**
```
Hello World!
```

---

### Test 3: Español (Forzado vía Query Param)

**URL:** `http://localhost:3000/?lang=es`

**Resultado esperado:**
```
¡Hola Mundo!
```

---

### Test 4: Detección por Header (Navegador)

Si tu navegador está configurado en inglés, al acceder a `http://localhost:3000/` debería detectar automáticamente el idioma y mostrar:

**Resultado esperado:**
```
Hello World!
```

Para probar manualmente con headers, usar herramientas como Postman o cURL:

```bash
curl -H "Accept-Language: en" http://localhost:3000/
```

---

## 🔑 Conceptos Clave

### Resolvers (Detectores de Idioma)

La librería utiliza dos métodos para detectar el idioma del usuario:

1. **QueryResolver**: Detecta el parámetro `?lang=xx` en la URL
2. **AcceptLanguageResolver**: Lee la cabecera `Accept-Language` del navegador

```typescript
resolvers: [
  { use: QueryResolver, options: ['lang'] }, // Prioridad 1
  AcceptLanguageResolver,                    // Prioridad 2 (fallback)
]
```

### Idioma de Respaldo (Fallback)

Si no se detecta ningún idioma válido, se usa el configurado en `fallbackLanguage`:

```typescript
fallbackLanguage: 'es'  // Español como predeterminado
```

### Estructura de Claves de Traducción

Las traducciones se acceden mediante la sintaxis `archivo.CLAVE`:

```typescript
this.i18n.t('messages.HELLO_WORLD', { lang: currentLang })
```

Donde:
- `messages` → nombre del archivo JSON (`messages.json`)
- `HELLO_WORLD` → clave dentro del JSON

---

## 📁 Organización del Proyecto

```
proyecto/
│
├── nest-cli.json                    # Configuración de assets para compilación
│
└── src/
    │
    ├── main.ts                      # Bootstrap de la aplicación
    ├── app.module.ts                # Configuración de I18nModule
    ├── app.controller.ts            # Controlador principal
    ├── app.service.ts               # Servicio con lógica de traducción
    │
    └── i18n/                        # Carpeta de traducciones
        ├── en/                      # Idioma inglés
        │   └── messages.json        # Traducciones en inglés
        └── es/                      # Idioma español
            └── messages.json        # Traducciones en español
```

---

## 🎨 Características Implementadas

✅ Detección automática de idioma por query params  
✅ Detección automática por headers HTTP  
✅ Idioma de respaldo configurable (Español)  
✅ Archivos JSON separados por idioma  
✅ Recarga en caliente de traducciones en desarrollo  
✅ Estructura modular y escalable  
✅ Compilación automática de assets de traducción  

---

## 🌐 Agregar Más Idiomas

Para agregar soporte para nuevos idiomas, sigue estos pasos:

### 1. Crear carpeta y archivo de traducción

```bash
# Ejemplo: agregar francés
mkdir src/i18n/fr
```

### 2. Crear archivo de mensajes

**Archivo:** `src/i18n/fr/messages.json`

```json
{
  "HELLO_WORLD": "Bonjour le monde!"
}
```

### 3. Probar

```
http://localhost:3000/?lang=fr
```

---

## 🔄 Agregar Más Traducciones

Para agregar nuevas claves de traducción:

### 1. Actualizar archivos JSON

**En `src/i18n/en/messages.json`:**
```json
{
  "HELLO_WORLD": "Hello World!",
  "WELCOME": "Welcome to our application",
  "GOODBYE": "See you soon!"
}
```

**En `src/i18n/es/messages.json`:**
```json
{
  "HELLO_WORLD": "¡Hola Mundo!",
  "WELCOME": "Bienvenido a nuestra aplicación",
  "GOODBYE": "¡Hasta pronto!"
}
```

### 2. Usar en el código

```typescript
this.i18n.t('messages.WELCOME', { lang: currentLang })
this.i18n.t('messages.GOODBYE', { lang: currentLang })
```

---

## 📚 Recursos Adicionales

Para profundizar en las tecnologías utilizadas:

- 📘 [Documentación Oficial de NestJS](https://docs.nestjs.com/)
- 📗 [nestjs-i18n - GitHub](https://github.com/toonvanstrijp/nestjs-i18n)
- 📙 [nestjs-i18n - NPM](https://www.npmjs.com/package/nestjs-i18n)
- 📕 [Internacionalización - Mejores Prácticas](https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/Internationalization)

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

- La configuración `watchAssets: true` en `nest-cli.json` permite que los cambios en los archivos JSON se reflejen automáticamente sin reiniciar el servidor en modo desarrollo
- El orden de los resolvers importa: primero se intenta con `QueryResolver`, luego con `AcceptLanguageResolver`
- Si ambos resolvers fallan, se usa el `fallbackLanguage` definido
- Los archivos JSON deben mantener la misma estructura de claves en todos los idiomas
- La compilación automática de assets solo funciona si `nest-cli.json` está correctamente configurado

---

## 🌍 Idiomas Soportados

| Código | Idioma | Estado |
|--------|--------|--------|
| `es` | Español | ✅ Implementado (Por defecto) |
| `en` | Inglés | ✅ Implementado |

---

## 🚀 Próximos Pasos Sugeridos

1. **Ampliar vocabulario**: Agregar más claves de traducción para diferentes secciones
2. **Más idiomas**: Implementar francés, alemán, portugués, etc.
3. **Validación**: Crear middleware para validar códigos de idioma
4. **Base de datos**: Migrar traducciones a una base de datos para gestión dinámica
5. **Interpolación**: Usar variables dinámicas en las traducciones
6. **Pluralización**: Implementar reglas de pluralización según el idioma

---

## 📄 Licencia

Proyecto de código abierto bajo Licencia MIT.

---

> 💡 **Consejo:** Para proyectos grandes, considera organizar las traducciones en múltiples archivos JSON por módulo (ej: `auth.json`, `users.json`, `products.json`) en lugar de un solo `messages.json`.