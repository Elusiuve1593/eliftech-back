import { Module } from '@nestjs/common';
import { EventsModule } from './modules/events/events.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventsModule,
    RegistrationModule,
    MongooseModule.forRoot(
      'mongodb+srv://elusiuve150993:CkeV6VyzgYOUP220@elif.axp2dbn.mongodb.net/',
    ),
  ],
})
export class AppModule {}
