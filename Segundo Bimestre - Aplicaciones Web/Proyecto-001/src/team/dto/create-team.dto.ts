import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Independiente del Valle', description: 'Nombre del equipo' })
  name: string;

  @ApiProperty({ example: 'Ecuador', description: 'País del equipo' })
  country: string;
}