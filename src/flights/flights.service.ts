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

  async getAllOrigins(): Promise<any> {
    return this.flightRepository.find({ select: ['origin'] });
  }

  async getAllDestinations(): Promise<any> {
    return this.flightRepository.find({ select: ['destination'] });
  }

  async findOne(id: number): Promise<any> {
    return this.flightRepository.findOne(id);
  }

  async query(orig: string, dest: string): Promise<any> {
    return await this.flightRepository.find({
      origin: orig,
      destination: dest,
    });
  }

  async queryOrig(dest: string): Promise<any> {
    return await this.flightRepository.find({
      select: ['origin'],
      where: { destination: dest },
    });
  }

  async queryDest(orig: string): Promise<any> {
    return await this.flightRepository.find({
      select: ['destination'],
      where: { origin: orig },
    });
  }

  async update(flight: Flight): Promise<UpdateResult> {
    return await this.flightRepository.update(flight.id, flight);
  }

  async delete(id: number): Promise<any> {
    return this.flightRepository.delete(id);
  }
}
