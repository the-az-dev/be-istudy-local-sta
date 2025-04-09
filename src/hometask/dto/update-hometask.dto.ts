import { PartialType } from '@nestjs/swagger';
import { CreateHometaskDto } from './create-hometask.dto';

export class UpdateHometaskDto extends PartialType(CreateHometaskDto) {}
