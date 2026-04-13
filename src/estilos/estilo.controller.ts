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
import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';
import { EstiloService } from './estilo.service';

@Controller('estilos')
export class EstiloController {
  constructor(private readonly estiloService: EstiloService) {}

  @Post()
  async create(@Body() createEstiloDto: CreateEstiloDto) {
    if (!createEstiloDto.nome) {
      throw new BadRequestException('Campo obrigatório: nome');
    }
    return this.estiloService.create(createEstiloDto);
  }

  @Get()
  findAll(@Query('nome') nome?: string) {
    return this.estiloService.findAll(nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estiloService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEstiloDto: UpdateEstiloDto,
  ) {
    if (!updateEstiloDto.nome) {
      throw new BadRequestException('Campo obrigatório: nome');
    }
    return this.estiloService.update(Number(id), updateEstiloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estiloService.remove(Number(id));
  }
}
