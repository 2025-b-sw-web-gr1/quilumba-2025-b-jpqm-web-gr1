import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { Player } from '../entities/player.entity'; // Importamos la entidad

@Module({
  imports: [TypeOrmModule.forFeature([Player])], // Registramos Player
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}