import { Controller, Post, Req, Res, HttpStatus, Get } from '@nestjs/common';
// CAMBIO AQUÍ: Agrega "type" después de import
import type { Request, Response } from 'express'; 

@Controller('auth')
export class AuthController {
  
  // LOGIN
  @Post('login')
  login(@Req() req: Request, @Res() res: Response) {
    const { username, password } = req.body;

    // 1. Verificamos si ya existe sesión activa
    if (req.session.user) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Ya existe una sesión activa. Por favor, deslogueate primero.',
        currentUser: req.session.user
      });
    }

    // 2. Credenciales quemadas (Admin / 12345678)
    if (username === 'admin' && password === '12345678') {
      
      // 3. Guardamos solo el usuario en la sesión
      req.session.user = 'admin'; 
      
      return res.status(HttpStatus.OK).json({ 
        message: 'Login exitoso', 
        user: req.session.user 
      });

    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({ 
        message: 'Credenciales inválidas' 
      });
    }
  }

  // LOGOUT
  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error al cerrar sesión' });
        }
        // Borramos la cookie del cliente también
        res.clearCookie('connect.sid'); 
        return res.status(HttpStatus.OK).json({ message: 'Sesión cerrada correctamente' });
      });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'No hay sesión activa para cerrar' });
    }
  }

  // RUTA EXTRA: Para ver quién está logueado (opcional, para probar)
  @Get('status')
  status(@Req() req: Request) {
    return {
      user: req.session.user || 'No hay usuario logueado',
      idSesion: req.sessionID
    };
  }
}