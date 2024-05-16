import { RegistrationService } from './registration.service';
import { RegistrationDTO } from './dto/registration.dto';
import { Registration } from 'src/schemas/registration.schema';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    createParticipant(registration: RegistrationDTO): Promise<Registration>;
    getParticipants(): Promise<Registration[]>;
}
