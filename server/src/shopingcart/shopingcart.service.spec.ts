import { Test, TestingModule } from '@nestjs/testing';
import { ShopingcartService } from './shopingcart.service';

describe('ShopingcartService', () => {
  let service: ShopingcartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopingcartService],
    }).compile();

    service = module.get<ShopingcartService>(ShopingcartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
