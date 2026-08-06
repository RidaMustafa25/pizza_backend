import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule], // Removed the circular import
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizeModule {} // Ensure the class name starts with an uppercase letter