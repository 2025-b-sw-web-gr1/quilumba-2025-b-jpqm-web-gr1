import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { Team } from './team/entities/team.entity';
import { Player } from './player/entities/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'proyecto_db.sqlite', // Nombre de la BD
      entities: [Team, Player],
      synchronize: true,
    }),
    TeamModule,
    PlayerModule,
  ],
})
export class AppModule {}