import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  readonly customerId: number;

  @IsArray()
  @IsNotEmpty()
  readonly productsId: number[];
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
