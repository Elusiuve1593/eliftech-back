import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Events, EventDocument } from 'src/schemas/events.schema';
import { EventsDTO } from './dto/event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Events.name)
    private readonly eventModel: PaginateModel<EventDocument>,
  ) {}

  createEvent(events: EventsDTO): Promise<Events> {
    return new this.eventModel(events).save();
  }

  async getEvents(
    page: number,
    limit: number,
  ): Promise<{
    docs: Events[];
    totalPages: number;
    totalDocs: number;
  }> {
    const { docs, totalPages, totalDocs } = await this.eventModel.paginate(
      {},
      { page, limit, populate: 'participants' },
    );
    return {
      docs,
      totalPages,
      totalDocs,
    };
  }
}
