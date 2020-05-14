import { Test, TestingModule } from '@nestjs/testing';
import { LocalStategyService } from './local-stategy.service';

describe('LocalStategyService', () => {
  let service: LocalStategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalStategyService],
    }).compile();

    service = module.get<LocalStategyService>(LocalStategyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
