import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  users: string[] = [];

  getUserByName(name: string): string {
    return this.users.find(e => e == name);
  }

  getAllUsers(): string[] {
    return this.users;
  };

  createUser(name: string): string {
    this.users.push(name);
    return name;
  }

  deleteUserByName(name: string): boolean {
    const isFindedUser = this.users.find(e => e == name);
    if (isFindedUser) {
      this.users = this.users.filter((e) => e !== name);
      return true;
    } else {
      return false;
    }
  }

}
