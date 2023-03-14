import { Injectable, Inject, Logger } from '@nestjs/common';

import { UserInfoService } from '../user-info/user-info.service';
import { LoginDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserInfo } from '../user-info/entities/user-info.entity';

@Injectable()
export class AuthService {
  @Inject()
  private readonly userInfoService: UserInfoService;
  @Inject()
  private readonly jwtService: JwtService;

  private readonly logger = new Logger(AuthService.name);

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userInfoService.findOneByEmailOrFail(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Partial<UserInfo>) {
    //const payload = { email: user.email, sub: user.id };
    const userInfo = await this.userInfoService.findOneByEmailOrFail(
      user.email,
    );

    const payload = {
      name: userInfo.name,
      role: userInfo.role,
      sub: userInfo.id,
    };
    return {
     // user: userInfo,
      access_token: this.jwtService.sign(payload),
    };
  }
}
