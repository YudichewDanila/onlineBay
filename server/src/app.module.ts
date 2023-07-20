import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorysModule } from './categorys/categorys.module';
import { Categorys } from './categorys/categorys.enity';
import { UndercategorysModule } from './undercategorys/undercategorys.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { ProductsModule } from './products/products.module';
import { RolesUsersModule } from './roles-users/roles-users.module';
import { UsersModule } from './users/users.module';
import { PointOrdersModule } from './point-orders/point-orders.module';
import { OrdersModule } from './orders/orders.module';
import { OrderProductModule } from './order-product/order-product.module';
import { AuthModule } from './auth/auth.module';
import { SerchModule } from './serch/serch.module';
import { ShopingcartModule } from './shopingcart/shopingcart.module';
import { OrderShopingcartModule } from './order-shopingcart/order-shopingcart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'reactonlinestore',
      entities: [Categorys],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategorysModule,
    UndercategorysModule,
    ManufacturersModule,
    ProductsModule,
    RolesUsersModule,
    UsersModule,
    PointOrdersModule,
    OrdersModule,
    OrderProductModule,
    AuthModule,
    SerchModule,
    ShopingcartModule,
    OrderShopingcartModule,
  ],
})
export class AppModule {}
