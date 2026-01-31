import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Players')
@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un jugador por ID' })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un jugador (Requiere Team ID)' })
  @ApiResponse({ status: 201, description: 'Jugador creado y asignado al equipo.' })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un jugador' })
  update(@Param('id') id: string, @Body() body: any) {
    return this.playerService.update(+id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un jugador' })
  remove(@Param('id') id: string) {
    return this.playerService.delete(+id);
  }
}