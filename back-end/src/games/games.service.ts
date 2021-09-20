import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGameDto: CreateGameDto) {
    const genrersIds = createGameDto.genrersIds;
    delete createGameDto.genrersIds;
    const data = {
      ...createGameDto,
      genrers: {
        connect: genrersIds?.map((id) => ({ id })),
      },
    };
    return this.prisma.games.create({
      data,
    });
  }

  findAll() {
    return this.prisma.games.findMany({
      include: {
        genrers: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.games.findUnique({
      where: { id },
      include: {
        genrers: true,
      },
    });
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    const genrersIds = updateGameDto.genrersIds;
    const genrersDisconnectIds = updateGameDto.genrersDisconnectIds;
    delete updateGameDto.genrersIds;
    delete updateGameDto.genrersDisconnectIds;

    const data = {
      ...updateGameDto,
      genrers: {
        connect: genrersIds?.map((id) => ({ id })),
        disconnect: genrersDisconnectIds?.map((id) => ({ id })),
      },
    };

    return this.prisma.games.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.games.delete({
      where: { id },
    });
  }
}
