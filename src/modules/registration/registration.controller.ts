import {
  Body,
  Controller,
  Post,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDTO } from './dto/registration.dto';
import { Registration } from '../../schemas/registration.schema';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  async createParticipant(
    @Body() registration: RegistrationDTO,
  ): Promise<Registration> {
    const existMail: RegistrationDTO | null =
      await this.registrationService.existMail(registration.email);

    if (existMail) {
      throw new HttpException(
        `The ${existMail.email} has already exist!`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return this.registrationService.createParticipant(registration);
  }

  @Get()
  getParticipants(): Promise<Registration[]> {
    return this.registrationService.getParticipants();
  }
}
