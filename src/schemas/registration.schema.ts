import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RegistrationDocument = Registration & Document;

@Schema({ timestamps: true })
export class Registration {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  dateOfBirth: string;

  @Prop({ required: true })
  eventSource: string;
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
