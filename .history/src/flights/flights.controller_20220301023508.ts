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
  async create(@Body() flight: Flight): Promise<Flights[]> {
    return this.flightService.create(flight);
  }

  //READ ALL
  @Get()
  findAll(): Promise<Flights[]> {
    return this.flightService.findAll();
  }

  //READ ONE
  @Get('/:id')
  findOne(@Param() param): Promise<Flights[]> {
    return this.flightService.findOne(param.id);
  }

  @Get("query/:orig/:dest")
  async query(@Param('orig') origin, @Param('dest') dest)
}
