import { Controller, Get, Post } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightService: FlightsService){
  }

  @Post()
  create(): string {
    return 'This action adds a new flight';
  }

  @Get()
  findAll(): string {
    return 'This action returns all flights';
  }
}
