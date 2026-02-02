import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth.controller'; // <--- Importar

@Module({
  imports: [],
  controllers: [AppController, AuthController], // <--- Agregar aquí
  providers: [AppService],
})
export class AppModule {}