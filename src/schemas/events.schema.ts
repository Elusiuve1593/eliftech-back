import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Registration } from './registration.schema';
import mongoose, { Document } from 'mongoose';

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

const EventsSchema = SchemaFactory.createForClass(Events);

EventsSchema.plugin(mongoosePaginate);

export { EventsSchema };
