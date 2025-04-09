import { PartialType } from '@nestjs/swagger';
import { CreateHometaskMaterialDto } from './create-hometask-material.dto';

export class UpdateHometaskMaterialDto extends PartialType(
  CreateHometaskMaterialDto,
) {}
