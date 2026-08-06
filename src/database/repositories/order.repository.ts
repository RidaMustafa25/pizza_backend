import { Model, QueryFilter, QueryOptions, Document } from 'mongoose';
import { MODEL } from '../consts';
import { OrderSchema } from '../schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Options } from '@nestjs/common';

@Injectable()
export class OrderRepository {
    pizzaModel: any;
    PizzaSizeModel: any;
    OrderModel: any;
  constructor(
    @InjectModel(MODEL.ORDER)
    private readonly sizeModel: Model<typeof OrderSchema>,
  ) {}


   async find(filter: QueryFilter<typeof OrderSchema>, options: QueryOptions<Document>) {
      return this.OrderModel.find( filter, {}, options);
    }
}
