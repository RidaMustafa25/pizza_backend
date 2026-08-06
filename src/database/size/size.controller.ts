import { Controller, Get } from '@nestjs/common';
import { SizeService } from './size.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Sizes')
@ApiBearerAuth()
@Controller('sizes')
export class SizeController {
  constructor(private categoryService: SizeService) {}

  @Get()
  async findAll(){
    const response = await this.categoryService.find();

    return { message: 'User created successfully', data: response };
  }
}
