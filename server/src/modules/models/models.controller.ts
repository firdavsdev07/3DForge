import { Controller, Get } from '@nestjs/common';

@Controller('models')
export class ModelsController {
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      module: 'models',
      message: 'Models module is working!',
    };
  }
}
