import { Test, TestingModule } from '@nestjs/testing';
import { FoulenService } from './foulen.service';

describe('FoulenService', () => {
  let service: FoulenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoulenService],
    }).compile();

    service = module.get<FoulenService>(FoulenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
