import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { EnumRole } from '../../common/enum'; // Adjusted the path to the correct location
import { Auth } from '../../common/decorators/auth.decorator';


@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Auth(EnumRole.GUEST, EnumRole.USER)
  @Get()
  async findAll() {
    const response = await this.categoryService.find();

    return { message: 'User created successfully', data: response };
  }
}