import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipes') // Esto define la ruta base: http://localhost:3000/recipes
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  // POST: Crear uno
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  // GET: Obtener muchos (con Query Params para paginación)
  // Ejemplo: /recipes?limit=5&offset=0
  @Get()
  findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.recipeService.findAll(limit, offset);
  }

  // GET: Obtener uno por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.recipeService.findOne(id);
  }

  // PATCH: Actualizar uno
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(id, updateRecipeDto);
  }

  // DELETE: Eliminar uno
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recipeService.remove(id);
  }
}