import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigurationService } from './sequelize.configuration/sequelize.configuration.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilmeController } from './filmes/filme.controller';
import { FilmeService } from './filmes/filme.service';
import { EstiloController } from './estilos/estilo.controller';
import { EstiloService } from './estilos/estilo.service';
import { Filme } from './filmes/filme';
import { Estilo } from './estilos/estilo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigurationService,
    }),
    SequelizeModule.forFeature([Filme, Estilo]),
  ],
  controllers: [AppController, FilmeController, EstiloController],
  providers: [AppService, FilmeService, EstiloService],
})
export class AppModule {}
