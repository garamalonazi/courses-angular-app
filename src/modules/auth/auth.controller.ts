import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';

@Controller()
export class AuthController {
  @Inject()
  private readonly authService: AuthService;
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
