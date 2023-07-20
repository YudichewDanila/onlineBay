import { Test, TestingModule } from '@nestjs/testing';
import { ShopingcartController } from './shopingcart.controller';

describe('ShopingcartController', () => {
  let controller: ShopingcartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopingcartController],
    }).compile();

    controller = module.get<ShopingcartController>(ShopingcartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
