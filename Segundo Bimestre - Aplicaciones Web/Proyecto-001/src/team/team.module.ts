import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <--- Importante
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './entities/team.entity'; // <--- Importamos la entidad

@Module({
  imports: [TypeOrmModule.forFeature([Team])], // <--- ¡Aquí registramos la tabla!
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}