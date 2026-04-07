import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import { User } from 'src/user/user';

@Injectable()
export class SequelizeConfigurationService implements SequelizeOptionsFactory
{
    constructor(
        private configService : ConfigService,
    ){}

    createSequelizeOptions(): 
    Promise<SequelizeModuleOptions> | SequelizeModuleOptions 
    {
        return {
            dialect: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_DATABASE'),
            synchronize: true,
            autoLoadModels: true,
            models: [User],
        }
    }
}
