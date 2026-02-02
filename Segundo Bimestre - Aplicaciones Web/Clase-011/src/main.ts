import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// CAMBIO AQUÍ: Quita el "* as"
import session from 'express-session';
import FileStore from 'session-file-store';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inicializamos el FileStore pasando la sesión
  const FileStoreSession = FileStore(session);

  app.use(
    session({
      store: new FileStoreSession({
        path: './sessions',
        ttl: 3600,
        retries: 0,
      }),
      secret: 'mi_secreto_super_seguro',
      resave: false,
      saveUninitialized: false,
      cookie: { 
        maxAge: 3600000, 
        httpOnly: true, 
      }, 
    }),
  );

  await app.listen(3000);
}
bootstrap();