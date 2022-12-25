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

@Controller('customers')
export class CustomerController {
  @Get()
  getCustomers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Customers: limit=> ${limit} offset=> ${offset}`,
    };
  }

  @Get('filter')
  getCustomerFilter() {
    return `getCustomerFilter`;
  }

  @Get(':customerId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('BrandId') BrandId: number) {
    return {
      message: `Customer ${BrandId}`,
    };
  }

  @Post()
  create() {
    return {
      message: `Customer Create`,
    };
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return {
      message: `Customer Update ${id}`,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `Customer Delete ${id}`,
    };
  }
}
