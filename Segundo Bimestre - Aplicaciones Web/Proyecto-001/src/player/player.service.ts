import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  findAll() {
    return this.playerRepository.find({ relations: ['team'] });
  }

  findOne(id: number) {
    return this.playerRepository.findOne({ where: { id }, relations: ['team'] });
  }

  create(createPlayerDto: CreatePlayerDto) {
    const { teamId, ...data } = createPlayerDto;
    const newPlayer = this.playerRepository.create({
      ...data,
      team: { id: teamId }, // Conexión mágica con el ID
    });
    return this.playerRepository.save(newPlayer);
  }

  async update(id: number, data: any) {
    await this.playerRepository.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.playerRepository.delete(id);
  }
}