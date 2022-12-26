import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Hombres',
      icon: 'http://cloud/categories/men.png',
    },
    {
      id: 2,
      name: 'Mujeres',
      icon: 'http://cloud/categories/women.png',
    },
    {
      id: 3,
      name: 'Niños',
      icon: 'http://cloud/categories/kids.png',
    },
    {
      id: 4,
      name: 'Unisex',
      icon: 'http://cloud/categories/unisex.png',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(payload: any) {
    const newCategory = {
      id: this.categories.length + 1,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: any) {
    const category = this.findOne(id);

    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }

    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }

  delete(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
