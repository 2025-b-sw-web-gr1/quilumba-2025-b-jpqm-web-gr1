import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importar esto

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activar validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina datos que no estén en el DTO (seguridad)
    forbidNonWhitelisted: true, // Lanza error si envían datos basura
  }));

  await app.listen(3000);
}
bootstrap();