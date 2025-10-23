import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { Model3D, Model3DSchema } from './schemas/model.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Model3D.name, schema: Model3DSchema }]),
  ],
  controllers: [ModelsController],
  providers: [ModelsService],
  exports: [ModelsService],
})
export class ModelsModule {}
