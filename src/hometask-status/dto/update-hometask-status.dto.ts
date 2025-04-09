import { PartialType } from '@nestjs/swagger';
import { CreateHometaskStatusDto } from './create-hometask-status.dto';

export class UpdateHometaskStatusDto extends PartialType(
  CreateHometaskStatusDto,
) {}
