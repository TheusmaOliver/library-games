import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenrerDto } from './dto/create-genrer.dto';
import { UpdateGenrerDto } from './dto/update-genrer.dto';

@Injectable()
export class GenrerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGenrerDto: CreateGenrerDto) {
    const data = {
      ...createGenrerDto,
    };
    return this.prisma.genrer.create({
      data,
    });
  }

  findAll() {
    return this.prisma.genrer.findMany({
      include: {
        games: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.genrer.findUnique({
      where: { id },
      include: {
        games: true,
      },
    });
  }

  update(id: number, updateGenrerDto: UpdateGenrerDto) {
    const gamesIds = updateGenrerDto.gamesIds;

    delete updateGenrerDto.gamesIds;

    const data = {
      ...updateGenrerDto,
      games: {
        connect: gamesIds?.map((id) => ({ id })),
      },
    };
    return this.prisma.genrer.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.genrer.delete({
      where: { id },
    });
  }
}
