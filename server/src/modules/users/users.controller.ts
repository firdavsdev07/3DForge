import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      module: 'users',
      message: 'Users module is working!',
    };
  }
}
