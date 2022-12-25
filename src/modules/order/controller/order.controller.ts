import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('orders')
export class OrderController {
  @Get()
  getOrders(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Orders: limit=> ${limit} offset=> ${offset}`,
    };
  }

  @Get('filter')
  getOrderFilter() {
    return `getOrderFilter`;
  }

  @Get(':orderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('BrandId') BrandId: number) {
    return {
      message: `Order ${BrandId}`,
    };
  }

  @Post()
  create() {
    return {
      message: `Order Create`,
    };
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return {
      message: `Order Update ${id}`,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `Order Delete ${id}`,
    };
  }
}
