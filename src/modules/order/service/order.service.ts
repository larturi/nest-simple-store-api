import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrderService {
  private orders: Order[] = [
    {
      id: 1,
      customerId: 1,
      productsId: [1, 2],
    },
    {
      id: 2,
      customerId: 2,
      productsId: [1, 3],
    },
    {
      id: 3,
      customerId: 1,
      productsId: [1, 2, 3],
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((order) => order.id === id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  create(payload: any) {
    const newOrder = {
      id: this.orders.length + 1,
      ...payload,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  update(id: number, payload: any) {
    const order = this.findOne(id);

    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }

    const index = this.orders.findIndex((item) => item.id === id);
    this.orders[index] = {
      ...order,
      ...payload,
    };
    return this.orders[index];
  }

  delete(id: number) {
    const index = this.orders.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    this.orders.splice(index, 1);
    return true;
  }
}
