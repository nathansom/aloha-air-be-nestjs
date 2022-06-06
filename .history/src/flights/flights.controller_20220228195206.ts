import { Controller, Get } from '@nestjs/common';

@Controller('flights')
export class FlightsController {
    @Get()
    findAll(): string {
        return 'This action returns all flights';
    }
}
