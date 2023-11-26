import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCredDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string {
    return "I'm a user";
  }

  @Post('login')
  userLogin(@Body() userCredential: UserCredDTO): any {
    return this.userService.userAuth(userCredential);
  }
}
