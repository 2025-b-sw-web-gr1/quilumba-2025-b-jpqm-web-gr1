import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  // Obtener todos
  findAll() {
    return this.teamRepository.find();
  }

  // Obtener uno por ID
  findOne(id: number) {
    return this.teamRepository.findOneBy({ id });
  }

  // Crear equipo
  create(data: any) {
    const newTeam = this.teamRepository.create(data);
    return this.teamRepository.save(newTeam);
  }

  // Actualizar
  async update(id: number, data: any) {
    await this.teamRepository.update(id, data);
    return this.findOne(id);
  }

  // Eliminar
  delete(id: number) {
    return this.teamRepository.delete(id);
  }

  // NUEVO: Buscar jugadores de un equipo específico
  async findPlayers(id: number) {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['players'], // Esto carga la relación con jugadores
    });
    // Si el equipo existe, devolvemos sus jugadores. Si no, una lista vacía.
    return team ? team.players : [];
  }
}