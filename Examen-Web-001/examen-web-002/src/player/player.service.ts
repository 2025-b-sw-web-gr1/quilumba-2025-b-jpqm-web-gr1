import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  findAll() {
    return this.playerRepository.find({ relations: ['team'] }); // Trae también los datos del equipo
  }

  findOne(id: number) {
    return this.playerRepository.findOne({ 
      where: { id },
      relations: ['team'] 
    });
  }

  create(data: any) {
    // Truco: Si nos envían "teamId", lo convertimos al formato que la base de datos entiende
    if (data.teamId) {
      data.team = { id: data.teamId };
    }
    const newPlayer = this.playerRepository.create(data);
    return this.playerRepository.save(newPlayer);
  }

  async update(id: number, data: any) {
    if (data.teamId) {
      data.team = { id: data.teamId };
    }
    await this.playerRepository.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.playerRepository.delete(id);
  }
}