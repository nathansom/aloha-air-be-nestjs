import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsController } from './flights/flights.controller';
import { FlightsService } from './flights/flights.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, FlightsController],
  providers: [AppService, FlightsService],
})
export class AppModule {}
