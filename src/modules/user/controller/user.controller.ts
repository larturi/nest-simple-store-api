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

import { UserService } from '../service/user.service';
import { ParseIntPipe } from '../../../common/pipes/parse-int/parse-int.pipe';
import { CreateUserDto } from '../dto/users.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getBrands() {
    return this.userService.findAll();
  }

  @Get(':orderId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.userService.findOne(orderId);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.userService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
