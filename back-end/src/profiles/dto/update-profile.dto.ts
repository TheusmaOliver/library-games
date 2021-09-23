import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsOptional()
  games?: CreateGameDto[];
  @IsOptional()
  @IsNumber({}, { each: true })
  gamesIds?: number[];
}
