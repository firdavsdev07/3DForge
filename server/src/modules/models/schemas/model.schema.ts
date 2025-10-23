import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type Model3DDocument = Model3D & Document;

@Schema({ timestamps: true })
export class Model3D {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  filePath: string;

  @Prop({ required: true })
  fileSize: number;

  @Prop({ required: true })
  fileType: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: Types.ObjectId;

  @Prop({ default: 0 })
  views: number;

  @Prop({ default: 0 })
  downloads: number;

  @Prop({ default: true })
  isPublic: boolean;

  @Prop([String])
  tags: string[];
}

export const Model3DSchema = SchemaFactory.createForClass(Model3D);
