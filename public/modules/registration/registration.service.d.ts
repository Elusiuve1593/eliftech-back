/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { Registration, RegistrationDocument } from 'src/schemas/registration.schema';
import { RegistrationDTO } from './dto/registration.dto';
import { Model, PaginateModel } from 'mongoose';
import { EventDocument } from 'src/schemas/events.schema';
export declare class RegistrationService {
    private readonly regModel;
    private readonly eventModel;
    constructor(regModel: Model<RegistrationDocument>, eventModel: PaginateModel<EventDocument>);
    createParticipant({ participantId, ...RegistrationDTO }: RegistrationDTO): Promise<Registration>;
    existMail(email: string): Promise<RegistrationDTO | null>;
    getParticipants(): Promise<Registration[]>;
}
