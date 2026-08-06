import {  Injectable } from '@nestjs/common';

import { SizeRepository } from '../repositories/size.repository';

@Injectable()
export class SizeService {
  constructor(
    
    private readonly sizeRepository: SizeRepository,
  ) {}

  async find() {
   const size =await this.sizeRepository.find(
    {},
    { select: '_id name'},
   );

    return size;
  }
}
