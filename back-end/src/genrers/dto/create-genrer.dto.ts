import { IsString } from 'class-validator';
import { Genrer } from '../entities/genrer.entity';

export class CreateGenrerDto implements Genrer {
  @IsString()
  name: string;
}
