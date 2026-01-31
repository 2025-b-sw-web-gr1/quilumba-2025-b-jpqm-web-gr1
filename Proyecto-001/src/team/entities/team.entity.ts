import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// NO IMPORTAMOS PLAYER AQUI

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  // Usamos el texto 'Player' y el tipo any[] para romper el círculo
  @OneToMany('Player', (player: any) => player.team)
  players: any[];
}