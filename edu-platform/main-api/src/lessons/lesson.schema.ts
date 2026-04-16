import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type LessonDocument = Lesson & Document;

@Schema()
export class Lesson {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  content!: string; // Текст урока или ссылка на видео

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Course', required: true })
  courseId!: string;

  @Prop({ default: 0 })
  order!: number; // Порядок урока в курсе
}


export const LessonSchema = SchemaFactory.createForClass(Lesson);