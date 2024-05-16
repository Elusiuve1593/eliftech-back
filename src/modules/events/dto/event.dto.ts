import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class EventsDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  date: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  organization: string;
}
