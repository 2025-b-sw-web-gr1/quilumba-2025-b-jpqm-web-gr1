import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  // NUEVO: Endpoint para obtener jugadores de un equipo
  // Ejemplo de uso: GET /teams/1/players
  @Get(':id/players')
  findPlayers(@Param('id') id: string) {
    return this.teamService.findPlayers(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.teamService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.teamService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.delete(+id);
  }
}