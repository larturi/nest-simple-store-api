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

@Controller('users')
export class UserController {
  @Get()
  getUsers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `Users: limit=> ${limit} offset=> ${offset}`,
    };
  }

  @Get('filter')
  getUserFilter() {
    return `getUserFilter`;
  }

  @Get(':userId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('BrandId') BrandId: number) {
    return {
      message: `User ${BrandId}`,
    };
  }

  @Post()
  create() {
    return {
      message: `User Create`,
    };
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return {
      message: `User Update ${id}`,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: `User Delete ${id}`,
    };
  }
}
