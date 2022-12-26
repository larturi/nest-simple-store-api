import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from 'src/entities/brand.entity';

@Injectable()
export class BrandService {
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Adidas',
    },
    {
      id: 2,
      name: 'Nike',
    },
    {
      id: 3,
      name: 'Puma',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  create(payload: any) {
    const newBrand = {
      id: this.brands.length + 1,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: any) {
    const brand = this.findOne(id);

    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }

    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...payload,
    };
    return this.brands[index];
  }

  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}
