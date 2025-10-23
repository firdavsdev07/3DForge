import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('health')
  getHealth() {
    return { status: 'ok', module: 'auth', message: 'Auth module is working!' };
  }
}
