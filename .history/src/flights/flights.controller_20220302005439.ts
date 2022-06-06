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

  //READ ALL ORIGINS
  @Get('origins')
  getAllOrigins(): Promise<any> {
    return this.flightService.getAllOrigins();
  }

  //READ ALL DESTINATIONS
  @Get('destinations')
  getAllDestinations(): Promise<any> {
    return this.flightService.getAllDestinations();
  }

  //READ ONE
  @Get('/:id')
  findOne(@Param() param): Promise<Flights[]> {
    return this.flightService.findOne(param.id);
  }

  //QUERY FLIGHTs
  @Get('query/:orig/:dest')
  async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
    return this.flightService.query(orig, dest);
  }

  //QUERY ORIGINS
  @Get('query/origins/:dest')
  async queryOrig(@Param('dest') dest): Promise<any> {
    return this.flightService.queryOrig(dest);
  }

  //QUERY DESTINATIONS
  @Get('query/destinations/:orig')
  async queryDest(@Param('orig') orig): Promise<any> {
    return this.flightService.queryDest(orig);
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
