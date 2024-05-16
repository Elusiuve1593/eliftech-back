import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Registration,
  RegistrationSchema,
} from '../../schemas/registration.schema';
import { Events, EventsSchema } from '../../schemas/events.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Registration.name, schema: RegistrationSchema },
      { name: Events.name, schema: EventsSchema },
    ]),
  ],
  providers: [RegistrationService],
  controllers: [RegistrationController],
})
export class RegistrationModule {}
