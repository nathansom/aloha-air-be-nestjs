import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly flightRepository: Repository<Flights>,
  ) {}

  async create(flight: Flight): Promise<any> {
      return await this.flightRepository.save(flight);
  }
  async findAll(): Promise<Flights[]> {
    return this.flightRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return this.flightRepository.findOne(id);
  }
}
