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

@Controller('categories')
export class CategoryController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return `getProductFilter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: number) {
    return {
      message: `Product ${productId}`,
    };
  }

  @Post()
  create() {
    return {
      message: `Product Create`,
    };
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return {
      message: `Product Update ${id}`,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `Product Delete ${id}`,
    };
  }
}
