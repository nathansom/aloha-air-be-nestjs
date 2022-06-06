import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';

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
  findOne(@Param('orig') orig): Promise<Flights[]> {
    return this.flightService.findOne(orig);
  }

  //READ ALL ORIGINS
  @Get('/:orig')
  getAllOrigins(@Param() param): Promise<any> {
    return this.flightService.getAllOrigins(para.);
  }

  //QUERY
  @Get('query/:orig/:dest')
  async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
    return this.flightService.query(orig, dest);
  }

  // UPDATE
  @Patch(':id/update')
  async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
    flight.id = Number(id);
    return this.flightService.update(flight);
  }

  // DELETE
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.flightService.delete(id);
  }
}
