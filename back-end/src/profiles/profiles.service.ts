import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      ...createProfileDto,
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
    };

    return this.prisma.profile.create({
      data,
    });
  }

  findAll() {
    return this.prisma.profile.findMany({
      include: {
        games: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.profile.findUnique({
      where: { id },
      include: {
        games: true,
      },
    });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    const gamesIds = updateProfileDto.gamesIds;

    delete updateProfileDto.gamesIds;

    const data: Prisma.ProfileUpdateInput = {
      ...updateProfileDto,
      games: {
        connect: gamesIds?.map((id) => ({ id })),
      },
    };
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
