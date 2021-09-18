import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateGenrerDto } from 'src/genrers/dto/create-genrer.dto';
import { Game } from '../entities/game.entity';

export class CreateGameDto implements Game {
  @IsString()
  title: string;

  @IsString()
  cover: string;

  @IsString()
  description: string;

  @IsInt()
  year: number;

  @IsString()
  score: string;

  @IsString()
  trailer: string;

  @IsString()
  gameplay: string;

  @IsOptional()
  genrers?: CreateGenrerDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  genrersIds?: number[];
}
