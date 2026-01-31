import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Teams') // Agrupa en Swagger
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos recuperada con éxito.' })
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID' })
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Obtener los jugadores de un equipo específico' })
  findPlayers(@Param('id') id: string) {
    return this.teamService.findPlayers(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado correctamente.' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo' })
  update(@Param('id') id: string, @Body() body: any) {
    return this.teamService.update(+id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  remove(@Param('id') id: string) {
    return this.teamService.delete(+id);
  }
}