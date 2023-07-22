import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.host,
      port: Number(process.env.port),
      username: process.env.usernameBd,
      password: process.env.password,
      database: process.env.database,
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
