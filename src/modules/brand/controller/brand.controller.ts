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

@Controller('brands')
export class BrandController {
  @Get()
  getBrands(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Brands: limit=> ${limit} offset=> ${offset}`,
    };
  }

  @Get('filter')
  getBrandFilter() {
    return `getBrandFilter`;
  }

  @Get(':brandId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('brandId') brandId: number) {
    return {
      message: `Brand ${brandId}`,
    };
  }

  @Post()
  create() {
    return {
      message: `Brand Create`,
    };
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return {
      message: `Brand Update ${id}`,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `Brand Delete ${id}`,
    };
  }
}
