import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Recipe } from './entities/recipe.entity';
import { Ingredient } from './entities/ingredient.entity';
// Importamos los nuevos archivos
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Recipe, Ingredient],
      synchronize: true,
    }),
    // Habilitamos que se puedan inyectar los repositorios de estas entidades
    TypeOrmModule.forFeature([Recipe, Ingredient]), 
  ],
  controllers: [AppController, RecipeController], // Agregamos RecipeController
  providers: [AppService, RecipeService],         // Agregamos RecipeService
})
export class AppModule {}