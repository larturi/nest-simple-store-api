import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { OrderService } from '../service/order.service';
import { ParseIntPipe } from '../../../common/pipes/parse-int/parse-int.pipe';
import { CreateOrderDto } from '../dto/orders.dto';

@Controller('orders')
export class OrderController {
  constructor(private ordersService: OrderService) {}

  @Get()
  getBrands() {
    return this.ordersService.findAll();
  }

  @Get(':orderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.ordersService.findOne(orderId);
  }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.ordersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.delete(id);
  }
}
