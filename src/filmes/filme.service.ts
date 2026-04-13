import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from './filme';
import { Estilo } from '../estilos/estilo';

@Injectable()
export class FilmeService {
  constructor(
    @InjectModel(Filme)
    private filmeModel: typeof Filme,
    @InjectModel(Estilo)
    private estiloModel: typeof Estilo,
  ) {}

  async create(createFilmeDto: CreateFilmeDto) {
    const estilo = await this.estiloModel.findByPk(createFilmeDto.estilo);
    if (!estilo) {
      throw new BadRequestException('Estilo não encontrado');
    }

    return this.filmeModel.create({
      estilo: createFilmeDto.estilo,
      nome: createFilmeDto.nome,
      ano: createFilmeDto.ano,
      duracao: createFilmeDto.duracao,
      foto: createFilmeDto.foto,
      sinopse: createFilmeDto.sinopse,
      video: createFilmeDto.video,
    } as Filme);
  }

  async findAll(nome?: string) {
    const where = nome
      ? {
          nome: {
            [Op.like]: `%${nome}%`,
          },
        }
      : undefined;

    return this.filmeModel.findAll({
      where,
      include: [Estilo],
    });
  }

  async findOne(id: number) {
    const filme = await this.filmeModel.findOne({
      where: { filme: id },
      include: [Estilo],
    });
    if (!filme) {
      throw new NotFoundException('Filme não encontrado');
    }
    return filme;
  }

  async update(id: number, updateFilmeDto: UpdateFilmeDto) {
    const estilo = await this.estiloModel.findByPk(updateFilmeDto.estilo);
    if (!estilo) {
      throw new BadRequestException('Estilo não encontrado');
    }

    const [count] = await this.filmeModel.update(
      {
        estilo: updateFilmeDto.estilo,
        nome: updateFilmeDto.nome,
        ano: updateFilmeDto.ano,
        duracao: updateFilmeDto.duracao,
        foto: updateFilmeDto.foto,
        sinopse: updateFilmeDto.sinopse,
        video: updateFilmeDto.video,
      },
      { where: { filme: id } },
    );

    if (!count) {
      throw new NotFoundException('Filme não encontrado');
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    const deleted = await this.filmeModel.destroy({ where: { filme: id } });
    if (!deleted) {
      throw new NotFoundException('Filme não encontrado');
    }
    return { message: 'Filme removido com sucesso' };
  }
}
