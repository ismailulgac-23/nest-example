import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { } from "express"
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }
  @Get()
  getUsers(): string[] {
    return this.userService.getAllUsers();
  }
  @Get("/info/:id")
  getUserById(
    
    @Param("id") id

  ): string {
    return this.userService.getUserByName(id);
  }
  @Post()
  create(
    @Body() body
  ): string {
    return this.userService.createUser(body.name);
  }
  @Delete(":id")
  delete(@Param("id") id: string): boolean {
    return this.userService.deleteUserByName(id);
  }
}
