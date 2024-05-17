import { Module } from '@nestjs/common';
import { EventsModule } from './modules/events/events.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Routes, RouterModule } from '@nestjs/core';

const routes: Routes = [
  {
    path: '/registration',
    module: RegistrationModule,
  },
];

@Module({
  imports: [
    EventsModule,
    RegistrationModule,
    MongooseModule.forRoot(
      'mongodb+srv://elusiuve150993:CkeV6VyzgYOUP220@elif.axp2dbn.mongodb.net/',
    ),
    RouterModule,
  ],
})
export class AppModule {}
