import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Registration,
  RegistrationDocument,
} from 'src/schemas/registration.schema';
import { RegistrationDTO } from './dto/registration.dto';
import { Model, PaginateModel } from 'mongoose';
import { EventDocument, Events } from "../../schemas/events.schema";

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name)
    private readonly regModel: Model<RegistrationDocument>,
    @InjectModel(Events.name)
    private readonly eventModel: PaginateModel<EventDocument>,
  ) {}

  async createParticipant({
    participantId,
    ...RegistrationDTO
  }: RegistrationDTO): Promise<Registration> {
    const findParticipant = await this.eventModel.findById(participantId);
    if (!findParticipant) throw new HttpException('User not found', 404);

    const newParticipant = await new this.regModel(RegistrationDTO).save();
    await findParticipant.updateOne({
      $push: {
        participants: newParticipant._id,
      },
    });

    return newParticipant;
  }

  existMail(email: string): Promise<RegistrationDTO | null> {
    return this.regModel.findOne({ email });
  }

  getParticipants(): Promise<Registration[]> {
    return this.regModel.find();
  }
}
