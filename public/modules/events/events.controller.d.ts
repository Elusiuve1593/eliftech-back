import { EventsService } from './events.service';
import { EventsDTO } from './dto/event.dto';
import { Events } from 'src/schemas/events.schema';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    createEvent(events: EventsDTO): Promise<Events>;
    getEvents(page: number, limit: number): Promise<{
        docs: Events[];
        totalPages: number;
        totalDocs: number;
    }>;
}
