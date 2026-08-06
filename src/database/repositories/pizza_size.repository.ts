import { Model, QueryFilter, QueryOptions, Document } from 'mongoose';
import { MODEL } from '../consts';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Options } from '@nestjs/common';
import { Pizzasize } from '../schemas/pizza-size.schemas';

@Injectable()
export class PizzaSizeRepository {
    pizzaModel: any;
    PizzaSizeModel: any;
  constructor(
    @InjectModel(MODEL.PIZZASIZE)
    private readonly sizeModel: Model<Pizzasize>,
  ) {}


   async find(filter: QueryFilter<Pizzasize>, options: QueryOptions<Document>) {
      return this.PizzaSizeModel.find( filter, {}, options);
    }
}
