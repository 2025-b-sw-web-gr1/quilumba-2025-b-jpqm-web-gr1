import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- CONFIGURACIÓN SWAGGER ---
  const config = new DocumentBuilder()
    .setTitle('API de Equipos y Jugadores')
    .setDescription('Documentación del Proyecto 001 - Joel Quilumba')
    .setVersion('1.0')
    .addTag('Teams', 'Operaciones sobre equipos')
    .addTag('Players', 'Operaciones sobre jugadores')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // La web estará en /api
  // -----------------------------

  await app.listen(3000);
}
bootstrap();