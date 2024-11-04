import { Test, TestingModule } from '@nestjs/testing';
import { InvestorController } from './investor.controller';

describe('InvestorController', () => {
  let controller: InvestorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestorController],
    }).compile();

    controller = module.get<InvestorController>(InvestorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
