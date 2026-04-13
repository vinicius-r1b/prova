import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmeService } from './filme.service';

@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  async create(@Body() createFilmeDto: CreateFilmeDto) {
    if (
      !createFilmeDto.estilo ||
      !createFilmeDto.nome ||
      !createFilmeDto.ano ||
      !createFilmeDto.duracao ||
      !createFilmeDto.foto
    ) {
      throw new BadRequestException(
        'Campos obrigatórios: estilo, nome, ano, duracao e foto',
      );
    }
    return this.filmeService.create(createFilmeDto);
  }

  @Get()
  findAll(@Query('nome') nome?: string) {
    return this.filmeService.findAll(nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmeService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFilmeDto: UpdateFilmeDto,
  ) {
    if (
      !updateFilmeDto.estilo ||
      !updateFilmeDto.nome ||
      !updateFilmeDto.ano ||
      !updateFilmeDto.duracao ||
      !updateFilmeDto.foto
    ) {
      throw new BadRequestException(
        'Campos obrigatórios: estilo, nome, ano, duracao e foto',
      );
    }
    return this.filmeService.update(Number(id), updateFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmeService.remove(Number(id));
  }
}
