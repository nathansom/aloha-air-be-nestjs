import { Controller, Get, Param, Post, Body, Put, Delete, Patch } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
import { identity } from 'rxjs';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightService: FlightsService) {}

  // CREATE
  @Post()
  async create(@Body() flight: Flight)

  @Get()
  findAll(): Promise<Flights[]> {
    return this.flightService.findAll();
  }

  @Get('/:id')
  findOne(@Param() param): Promise<Flights[]> {
    return this.flightService.findOne(param.id);
  }
}
