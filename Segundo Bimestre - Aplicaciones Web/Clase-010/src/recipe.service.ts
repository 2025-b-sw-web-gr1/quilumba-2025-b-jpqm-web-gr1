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

  // 1. Crear uno
  async create(createRecipeDto: CreateRecipeDto) {
    const recipe = this.recipeRepository.create(createRecipeDto);
    return await this.recipeRepository.save(recipe);
  }

  // 2. Obtener muchos (con filtros/paginación básica)
  async findAll(limit: number = 10, offset: number = 0) {
    return await this.recipeRepository.find({
      take: limit,
      skip: offset,
      relations: ['ingredients'], // Traemos también los ingredientes
    });
  }

  // 3. Obtener uno
  async findOne(id: number) {
    const recipe = await this.recipeRepository.findOne({
      where: { id },
      relations: ['ingredients'],
    });
    if (!recipe) {
      throw new NotFoundException(`Receta con ID ${id} no encontrada`);
    }
    return recipe;
  }

  // 4. Actualizar uno
  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    // Primero verificamos que exista con preload
    const recipe = await this.recipeRepository.preload({
      id: id,
      ...updateRecipeDto,
    });

    if (!recipe) {
      throw new NotFoundException(`Receta con ID ${id} no encontrada`);
    }

    return await this.recipeRepository.save(recipe);
  }

  // 5. Eliminar uno
  async remove(id: number) {
    const recipe = await this.findOne(id); // Reusamos el método para verificar si existe
    return await this.recipeRepository.remove(recipe);
  }
}