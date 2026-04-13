import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateEstiloDto } from './dto/create-estilo.dto';
import { UpdateEstiloDto } from './dto/update-estilo.dto';
import { Estilo } from './estilo';

@Injectable()
export class EstiloService {
  constructor(
    @InjectModel(Estilo)
    private estiloModel: typeof Estilo,
  ) {}

  async create(createEstiloDto: CreateEstiloDto) {
    return this.estiloModel.create({
      nome: createEstiloDto.nome,
    } as Estilo);
  }

  async findAll(nome?: string) {
    const where = nome
      ? {
          nome: {
            [Op.like]: `%${nome}%`,
          },
        }
      : undefined;

    return this.estiloModel.findAll({ where });
  }

  async findOne(id: number) {
    const estilo = await this.estiloModel.findByPk(id);
    if (!estilo) {
      throw new NotFoundException('Estilo não encontrado');
    }
    return estilo;
  }

  async update(id: number, updateEstiloDto: UpdateEstiloDto) {
    const estilo = await this.findOne(id);
    await this.estiloModel.update(
      { nome: updateEstiloDto.nome },
      { where: { estilo: id } },
    );
    return this.findOne(id);
  }

  async remove(id: number) {
    const estilo = await this.findOne(id);
    return estilo.destroy();
  }
}
