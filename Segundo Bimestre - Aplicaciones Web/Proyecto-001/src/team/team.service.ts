import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  findAll() {
    return this.teamRepository.find();
  }

  findOne(id: number) {
    return this.teamRepository.findOneBy({ id });
  }

  create(createTeamDto: CreateTeamDto) {
    const newTeam = this.teamRepository.create(createTeamDto);
    return this.teamRepository.save(newTeam);
  }

  async update(id: number, data: any) {
    await this.teamRepository.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.teamRepository.delete(id);
  }

  // Buscar jugadores de un equipo (Requerimiento especial)
  async findPlayers(id: number) {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['players'],
    });
    return team ? team.players : [];
  }
}