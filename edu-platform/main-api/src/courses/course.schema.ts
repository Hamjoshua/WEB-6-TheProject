import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../user/user.schema';

export type CourseDocument = Course & Document;

@Schema({ timestamps: true }) // Автоматически добавит createdAt и updatedAt
export class Course {
  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop({ type: String, enum: ['draft', 'published'], default: 'draft' })
  status!: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  authorId!: User;

  @Prop()
  bannerUrl?: string; // для image-api
}

export const CourseSchema = SchemaFactory.createForClass(Course);