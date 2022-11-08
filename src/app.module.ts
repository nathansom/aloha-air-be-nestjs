import { Module } from '@nestjs/common';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME || '',
      password: process.env.DATABASE_PASSWORD || '',
      database: 'transportation',
      entities: [Flights],
      synchronize: true,
    }),
    FlightsModule,
  ],
})
export class AppModule {}
