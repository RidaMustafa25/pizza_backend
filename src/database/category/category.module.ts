import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule], // Removed the circular import
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {} // Ensure the class name starts with an uppercase letter