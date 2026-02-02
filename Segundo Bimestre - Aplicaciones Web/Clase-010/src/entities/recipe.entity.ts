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

  // Una Receta tiene muchos Ingredientes
  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe, {
    cascade: true, 
  })
  ingredients: Ingredient[];
}