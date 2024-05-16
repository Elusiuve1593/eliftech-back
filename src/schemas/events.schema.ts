import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoosePaginate from '../../node_modules/mongoose-paginate-v2';
import { Registration } from './registration.schema';
import mongoose from 'mongoose';

export type EventDocument = Events & Document;

@Schema({ timestamps: true })
export class Events {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  organization: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Registration' }],
  })
  participants: Registration[];
}

export const EventsSchema =
  SchemaFactory.createForClass(Events).plugin(mongoosePaginate);
