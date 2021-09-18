import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProfileDto)
  profiles?: CreateProfileDto[];

  @IsOptional()
  @IsNumber({}, { each: true })
  profilesIds?: number[];
}
