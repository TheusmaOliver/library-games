import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { CreateGenrerDto } from './create-genrer.dto';

export class UpdateGenrerDto extends PartialType(CreateGenrerDto) {
  @IsOptional()
  games?: CreateGameDto[];
  @IsOptional()
  @IsNumber({}, { each: true })
  gamesIds?: number[];
}
