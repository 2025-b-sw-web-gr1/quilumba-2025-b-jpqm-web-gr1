import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Player } from './player.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  // Relación: Un equipo tiene MUCHOS jugadores
  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}