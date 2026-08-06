import {  Injectable } from '@nestjs/common';

import { CategoryRepository } from '../repositories/category.repository';

@Injectable()
export class CategoryService {
  constructor(
    private readonly userRepository: CategoryRepository,
    private readonly categoryRepository: CategoryRepository
  ) {}

  async find() {
   const category =await this.categoryRepository.find(
    {},
    { select: '_id name'},
   );

    return category;
  }
}
