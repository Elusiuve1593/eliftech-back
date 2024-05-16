import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class RegistrationDTO {
  @IsNotEmpty()
  @MaxLength(50)
  fullName: string;

  @IsNotEmpty()
  @MaxLength(50)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(12)
  dateOfBirth: string;

  @IsNotEmpty()
  @MaxLength(15)
  eventSource: string;

  @IsNotEmpty()
  @IsString()
  participantId: string;
}
