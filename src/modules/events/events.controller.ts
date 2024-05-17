import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsDTO } from './dto/event.dto';
import { Events } from '../../schemas/events.schema';

@Controller('')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  createEvent(@Body() events: EventsDTO): Promise<Events> {
    return this.eventsService.createEvent(events);
  }

  @Get()
  getEvents(
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('limit', new DefaultValuePipe(1)) limit: number,
  ): Promise<{ docs: Events[]; totalPages: number; totalDocs: number }> {
    return this.eventsService.getEvents(page, limit);
  }
}
