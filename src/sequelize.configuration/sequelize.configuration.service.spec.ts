import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeConfigurationService } from './sequelize.configuration.service';

describe('SequelizeConfigurationService', () => {
  let service: SequelizeConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SequelizeConfigurationService],
    }).compile();

    service = module.get<SequelizeConfigurationService>(SequelizeConfigurationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
