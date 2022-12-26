import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Perez',
      gender: 'M',
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Lopez',
      gender: 'F',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(payload: any) {
    const newCustomer = {
      id: this.customers.length + 1,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: any) {
    const customer = this.findOne(id);

    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...customer,
      ...payload,
    };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
