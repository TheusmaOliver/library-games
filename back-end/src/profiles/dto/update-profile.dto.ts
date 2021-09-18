import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateGameDto)
  games?: CreateGameDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  gamesIds: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  gamesDisconnectIds: number[];
}
