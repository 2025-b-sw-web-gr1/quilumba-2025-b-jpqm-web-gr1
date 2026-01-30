import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from '../entities/team.entity'; // Importamos la entidad

@Module({
  imports: [TypeOrmModule.forFeature([Team])], // Registramos la tabla aquí
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}