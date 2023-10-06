import { Test, TestingModule } from '@nestjs/testing';
import { FoulenController } from './foulen.controller';
import { FoulenService } from './foulen.service';

describe('FoulenController', () => {
  let controller: FoulenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoulenController],
      providers: [FoulenService],
    }).compile();

    controller = module.get<FoulenController>(FoulenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
