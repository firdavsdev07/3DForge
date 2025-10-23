import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Model3D, Model3DDocument } from './schemas/model.schema';

@Injectable()
export class ModelsService {
  constructor(
    @InjectModel(Model3D.name) private model3DModel: Model<Model3DDocument>,
  ) {}

  // TODO: Models service methods will be implemented here
}
