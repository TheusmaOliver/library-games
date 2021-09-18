import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GenrerController } from './genrers.controller';
import { GenrerService } from './genrers.service';

@Module({
  imports: [PrismaModule],
  controllers: [GenrerController],
  providers: [GenrerService],
})
export class GenrerModule {}
