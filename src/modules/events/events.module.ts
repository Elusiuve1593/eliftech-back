import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Events, EventsSchema } from '../../schemas/events.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Events.name, schema: EventsSchema }]),
  ],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
