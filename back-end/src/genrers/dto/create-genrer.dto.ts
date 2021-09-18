import { Genrer } from '../entities/genrer.entity';
import { IsString } from 'class-validator';

export class CreateGenrerDto implements Genrer {
  @IsString()
  name: string;
}
