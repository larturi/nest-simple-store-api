import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './modules/order/controller/order.controller';
import { OrderModule } from './modules/order/module/order.module';
import { OrderService } from './modules/order/service/order.service';
import { UserController } from './modules/user/controller/user.controller';
import { UserModule } from './modules/user/module/user.module';
import { UserService } from './modules/user/service/user.service';
import { CustomerController } from './modules/customer/controller/customer.controller';
import { CustomerModule } from './modules/customer/module/customer.module';
import { CustomerService } from './modules/customer/service/customer.service';
import { CategoryController } from './modules/category/controller/category.controller';
import { CategoryModule } from './modules/category/module/category.module';
import { CategoryService } from './modules/category/service/category.service';
import { ProductController } from './modules/product/controller/product.controller';
import { ProductModule } from './modules/product/module/product.module';
import { ProductService } from './modules/product/service/product.service';
import { BrandController } from './modules/brand/controller/brand.controller';
import { BrandModule } from './modules/brand/module/brand.module';
import { BrandService } from './modules/brand/service/brand.service';

@Module({
  imports: [
    OrderModule,
    UserModule,
    CustomerModule,
    CategoryModule,
    ProductModule,
    BrandModule,
  ],
  controllers: [
    AppController,
    OrderController,
    UserController,
    CustomerController,
    CategoryController,
    ProductController,
    BrandController,
  ],
  providers: [
    AppService,
    OrderService,
    UserService,
    CustomerService,
    CategoryService,
    ProductService,
    BrandService,
  ],
})
export class AppModule {}
