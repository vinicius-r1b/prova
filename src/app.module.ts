import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigurationService } from './sequelize.configuration/sequelize.configuration.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { User } from './user/user';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigurationService,
    }),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
