import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Importamos las entidades que acabas de crear
import { Team } from './entities/team.entity';
import { Player } from './entities/player.entity';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Team, Player], // ¡Aquí las registramos!
      synchronize: true, // Esto crea las tablas automáticamente
    }),
    TeamModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}