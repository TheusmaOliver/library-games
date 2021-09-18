import { IsInt, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  title: string;

  @IsString()
  imagemUrl: string;

  @IsInt()
  userId: number;
}
