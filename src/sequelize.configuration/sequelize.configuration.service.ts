import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import { Estilo } from 'src/estilos/estilo';
import { Filme } from 'src/filmes/filme';

@Injectable()
export class SequelizeConfigurationService implements SequelizeOptionsFactory {
  constructor(private configService: ConfigService) {}

  createSequelizeOptions(): Promise<SequelizeModuleOptions> | SequelizeModuleOptions {
    return {
      dialect: 'sqlite',
      storage: this.configService.get<string>('DB_STORAGE') || 'database.sqlite',
      synchronize: true,
      autoLoadModels: true,
      models: [Filme, Estilo],
      logging: false,
    };
  }
}
