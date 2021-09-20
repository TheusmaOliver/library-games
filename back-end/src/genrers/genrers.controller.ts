import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Public } from 'src/auth/public.decocator';
import { CreateGenrerDto } from './dto/create-genrer.dto';
import { UpdateGenrerDto } from './dto/update-genrer.dto';
import { GenrerService } from './genrers.service';

@Controller('genrer')
export class GenrerController {
  constructor(private readonly genrerService: GenrerService) {}

  @Post()
  create(@Body() createGenrerDto: CreateGenrerDto) {
    return this.genrerService.create(createGenrerDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.genrerService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genrerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenrerDto: UpdateGenrerDto) {
    return this.genrerService.update(+id, updateGenrerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genrerService.remove(+id);
  }
}
