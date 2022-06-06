import { Controller, Get, Post } from '@nestjs/common';

@Controller('flights')
export class FlightsController {
  @Post()
  create(): string {
    return 'This action adds a new flight';
  }

  @Get()
  findAll(): string {
    return 'This action returns all flights';
  }
}
