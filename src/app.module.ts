import { Module } from '@nestjs/common';
import { ConfigureModule } from 'src/config/config.module';
import { EventsModule } from './modules/events/events.module';
import { RegistrationModule } from './modules/registration/registration.module';

@Module({
  imports: [ConfigureModule, EventsModule, RegistrationModule],
})
export class AppModule {}
