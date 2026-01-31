import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// NO IMPORTAMOS TEAM AQUI

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  // Usamos el texto 'Team' y el tipo any
  @ManyToOne('Team', (team: any) => team.players, { onDelete: 'CASCADE' })
  team: any;
}