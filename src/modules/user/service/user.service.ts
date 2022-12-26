import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      email: 'user1@correo.com',
      password: '12345678',
      isActive: true,
    },
    {
      id: 2,
      email: 'user2@correo.com',
      password: '12345678',
      isActive: true,
    },
    {
      id: 3,
      email: 'user3@correo.com',
      password: '12345678',
      isActive: true,
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(payload: any) {
    const newUser = {
      id: this.users.length + 1,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: any) {
    const user = this.findOne(id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
