import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator'; // <--- Agrega IsArray

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  // AGREGA ESTO:
  @IsOptional()
  @IsArray()
  ingredients?: any[]; 
}