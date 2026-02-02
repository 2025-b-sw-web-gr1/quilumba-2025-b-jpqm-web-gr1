# Clase-010: Backend NestJS con TypeORM y SQLite (Relación 1:N)

## 🎯 Descripción General

Este documento detalla los pasos y el código fuente para implementar una API RESTful utilizando **NestJS 11**, **TypeORM** y **SQLite**. El objetivo es gestionar recetas e ingredientes con una relación de *Uno a Muchos*.

**Características destacadas:**
- Relaciones 1:N entre entidades (Recipe → Ingredients)
- Validación automática de datos con DTOs
- Operaciones CRUD completas
- Cascade para operaciones relacionadas
- Base de datos SQLite integrada

---

## 🛠️ Stack Tecnológico

| Herramienta | Propósito |
|------------|-----------|
| **NestJS 11** | Framework backend progresivo basado en Node.js |
| **TypeORM** | ORM (Object-Relational Mapping) para gestión de base de datos |
| **SQLite** | Sistema de base de datos relacional embebido |
| **class-validator** | Validación de DTOs |
| **class-transformer** | Transformación de objetos |
| **TypeScript** | Lenguaje tipado para desarrollo robusto |

---

## ⚡ Instalación y Configuración

### Paso 1: Instalar dependencias principales

```bash
# Instalar TypeORM y el driver de SQLite
npm install --save @nestjs/typeorm typeorm sqlite3

# Instalar validadores para los DTOs
npm install class-validator class-transformer @nestjs/mapped-types
```

---

## 📝 Código Fuente

### A. Entidades (Base de Datos)

#### Entidad Padre: Recipe

**Archivo:** `src/entities/recipe.entity.ts`

```typescript
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  // Relación: Una Receta tiene muchos Ingredientes (Cascade permite guardar todo junto)
  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe, {
    cascade: true,
  })
  ingredients: Ingredient[];
}
```

#### Entidad Hija: Ingredient

**Archivo:** `src/entities/ingredient.entity.ts`

```typescript
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: string;

  // Relación: Muchos Ingredientes pertenecen a una Receta
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    onDelete: 'CASCADE',
  })
  recipe: Recipe;
}
```

---

### B. DTOs (Validación de Datos)

#### DTO de Creación

**Archivo:** `src/dto/create-recipe.dto.ts`

```typescript
import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsArray()
  ingredients?: any[];
}
```

#### DTO de Actualización

**Archivo:** `src/dto/update-recipe.dto.ts`

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {}
```

---

### C. Servicio (Lógica de Negocio)

**Archivo:** `src/recipe.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const recipe = this.recipeRepository.create(createRecipeDto);
    return await this.recipeRepository.save(recipe);
  }

  async findAll(limit: number = 10, offset: number = 0) {
    return await this.recipeRepository.find({
      take: limit,
      skip: offset,
      relations: ['ingredients'],
    });
  }

  async findOne(id: number) {
    const recipe = await this.recipeRepository.findOne({
      where: { id },
      relations: ['ingredients'],
    });
    if (!recipe) throw new NotFoundException(`Receta #${id} no encontrada`);
    return recipe;
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const recipe = await this.recipeRepository.preload({
      id: id,
      ...updateRecipeDto,
    });
    if (!recipe) throw new NotFoundException(`Receta #${id} no encontrada`);
    return await this.recipeRepository.save(recipe);
  }

  async remove(id: number) {
    const recipe = await this.findOne(id);
    return await this.recipeRepository.remove(recipe);
  }
}
```

---

### D. Controlador (Rutas API)

**Archivo:** `src/recipe.controller.ts`

```typescript
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @Get()
  findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.recipeService.findAll(limit, offset);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.recipeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(id, updateRecipeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recipeService.remove(id);
  }
}
```

---

### E. Configuración del Módulo

**Archivo:** `src/app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Recipe } from './entities/recipe.entity';
import { Ingredient } from './entities/ingredient.entity';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Recipe, Ingredient],
      synchronize: true, // Solo para desarrollo
    }),
    TypeOrmModule.forFeature([Recipe, Ingredient]),
  ],
  controllers: [AppController, RecipeController],
  providers: [AppService, RecipeService],
})
export class AppModule {}
```

---

### F. Activación de Validaciones

**Archivo:** `src/main.ts`

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(3000);
}
bootstrap();
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

### 🍽️ Gestión de Recetas

| Método HTTP | Endpoint | Descripción |
|-------------|----------|-------------|
| `GET` | `/recipes` | Recupera la lista completa de recetas (con paginación) |
| `GET` | `/recipes/:id` | Consulta una receta específica por su ID (incluye ingredientes) |
| `POST` | `/recipes` | Registra una nueva receta con sus ingredientes |
| `PATCH` | `/recipes/:id` | Actualiza la información de una receta |
| `DELETE` | `/recipes/:id` | Elimina una receta del sistema (cascade elimina ingredientes) |

---

## 💻 Ejemplos de Uso

### Crear una Receta con Ingredientes

Abrir el navegador en `http://localhost:3000/recipes`, presionar `F12` (Consola) y ejecutar:

```javascript
fetch('http://localhost:3000/recipes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "Hamburguesa Clásica",
    description: "Deliciosa hamburguesa casera",
    ingredients: [
      { name: "Carne", quantity: "200g" },
      { name: "Pan", quantity: "1 unidad" },
      { name: "Lechuga", quantity: "2 hojas" },
      { name: "Tomate", quantity: "3 rodajas" }
    ]
  })
})
.then(res => res.json())
.then(console.log);
```

### Obtener todas las Recetas

```javascript
fetch('http://localhost:3000/recipes?limit=10&offset=0')
  .then(res => res.json())
  .then(console.log);
```

### Obtener una Receta específica

```javascript
fetch('http://localhost:3000/recipes/1')
  .then(res => res.json())
  .then(console.log);
```

### Actualizar una Receta

```javascript
fetch('http://localhost:3000/recipes/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    description: "Hamburguesa casera mejorada con ingredientes premium"
  })
})
.then(res => res.json())
.then(console.log);
```

### Eliminar una Receta

```javascript
fetch('http://localhost:3000/recipes/1', {
  method: 'DELETE'
})
.then(res => res.json())
.then(console.log);
```

---

## 🔑 Conceptos Clave

### Relación Uno a Muchos (1:N)

- **Una receta** puede tener **muchos ingredientes**
- **Un ingrediente** pertenece a **una sola receta**
- Uso de decoradores `@OneToMany` y `@ManyToOne`

### Cascade Operations

```typescript
@OneToMany(() => Ingredient, (ingredient) => ingredient.recipe, {
  cascade: true,  // Al guardar la receta, también guarda los ingredientes
})
```

### OnDelete Cascade

```typescript
@ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
  onDelete: 'CASCADE',  // Al eliminar la receta, también elimina los ingredientes
})
```

---

## 📁 Organización del Proyecto

```
src/
│
├── main.ts                          # Bootstrap de la aplicación + validaciones globales
├── app.module.ts                    # Módulo raíz que conecta TypeORM y entidades
│
├── entities/                        # Definición de entidades de base de datos
│   ├── recipe.entity.ts            # Modelo de datos para recetas
│   └── ingredient.entity.ts        # Modelo de datos para ingredientes
│
├── dto/                            # Data Transfer Objects
│   ├── create-recipe.dto.ts       # DTO para creación de recetas
│   └── update-recipe.dto.ts       # DTO para actualización de recetas
│
├── recipe.controller.ts            # Controlador de rutas HTTP
└── recipe.service.ts               # Lógica de negocio
```

---

## 🎨 Características Implementadas

✅ Validación automática de datos con class-validator  
✅ Relaciones 1:N con cascade operations  
✅ Paginación en listado de recetas  
✅ Manejo de errores con NotFoundException  
✅ DTOs para entrada y salida de datos  
✅ Parsing automático de parámetros (ParseIntPipe)  
✅ Sincronización automática de base de datos  

---

## 📚 Recursos Adicionales

Para profundizar en las tecnologías utilizadas:

- 📘 [Documentación Oficial de NestJS](https://docs.nestjs.com/)
- 📗 [TypeORM - Documentación](https://typeorm.io/)
- 📙 [class-validator - GitHub](https://github.com/typestack/class-validator)
- 📕 [SQLite - Documentación](https://www.sqlite.org/docs.html)

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

- La base de datos SQLite (`database.sqlite`) se genera automáticamente al ejecutar la aplicación
- Las tablas se crean y sincronizan automáticamente gracias a TypeORM (`synchronize: true`)
- El modo `synchronize: true` solo debe usarse en desarrollo, nunca en producción
- La validación global se aplica a todos los endpoints automáticamente
- Los ingredientes se eliminan automáticamente al eliminar una receta (CASCADE)

---

## 📄 Licencia

Proyecto de código abierto bajo Licencia MIT.

---