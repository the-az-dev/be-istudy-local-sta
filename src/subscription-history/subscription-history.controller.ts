import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscriptionHistoryService } from './subscription-history.service';
import { CreateSubscriptionHistoryDto } from './dto/create-subscription-history.dto';
import { UpdateSubscriptionHistoryDto } from './dto/update-subscription-history.dto';

@Controller('subscription-history')
export class SubscriptionHistoryController {
  constructor(
    private readonly subscriptionHistoryService: SubscriptionHistoryService,
  ) {}

  @Post()
  create(@Body() createSubscriptionHistoryDto: CreateSubscriptionHistoryDto) {
    return this.subscriptionHistoryService.create(createSubscriptionHistoryDto);
  }

  @Get()
  findAll() {
    return this.subscriptionHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionHistoryDto: UpdateSubscriptionHistoryDto,
  ) {
    return this.subscriptionHistoryService.update(
      +id,
      updateSubscriptionHistoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionHistoryService.remove(+id);
  }
}
