import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ unique: true, required: true })
    email!: string;

    @Prop({ required: true })
    passwordHash!: string;

    @Prop({ required: true, enum: ['student', 'teacher'], default: 'student' })
    role!: string;
}


export const UserSchema = SchemaFactory.createForClass(User);