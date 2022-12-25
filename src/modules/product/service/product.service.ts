import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripcion Producto 1',
      price: 200,
      stock: 500,
      imageUrl: 'http://cloud/products/image1.png',
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripcion Producto 2',
      price: 400,
      stock: 1000,
      imageUrl: 'http://cloud/products/image2.png',
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripcion Producto 3',
      price: 700,
      stock: 100,
      imageUrl: 'http://cloud/products/image3.png',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: any) {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
