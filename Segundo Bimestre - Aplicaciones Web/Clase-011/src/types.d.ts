import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user: string; // Aquí definimos que nuestra sesión tendrá una propiedad 'user' tipo string
  }
}