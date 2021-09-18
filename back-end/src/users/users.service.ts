import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// Bcrypt
import * as bcrypt from 'bcrypt';
import { Prisma } from '.prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({
      data,
    });
    return {
      ...createdUser,
      password: undefined,
    };
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        profiles: true,
      },
    });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const profilesIds = updateUserDto.profilesIds;
    delete updateUserDto.profilesIds;

    const data: Prisma.UserUpdateInput = {
      ...updateUserDto,
      profiles: {
        connect: profilesIds?.map((id) => ({ id })),
      },
    };
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
