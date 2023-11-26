import { Injectable } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/models/user.model';

@Injectable()
export class UserService {
  private readonly email: string = 'abc@gmail.com';
  private readonly password: string = 'abc1234';

  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  userAuth(userCredential: UserCredDTO): boolean {
    if (
      userCredential.email === this.email &&
      userCredential.password === this.password
    ) {
      return true;
    } else {
      return false;
    }
  }

  async createUser(user: Users) {
    const result = this.userRepository.insert(user);
    return result;
  }

  async getUserByEmail(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
}
