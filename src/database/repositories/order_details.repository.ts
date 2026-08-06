import { Model, QueryFilter, QueryOptions } from 'mongoose';
import { OrderDetails } from '../schemas/order_details.schema';
import { MODEL } from '../consts';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Options } from '@nestjs/common';

@Injectable()
export class OrderDetailsRepository {
    pizzaModel: any;
    orderdetailsModel: any;
  constructor(
    @InjectModel(MODEL.ORDERDETAILS)
    private readonly sizeModel: Model<typeof OrderDetails>,
  ) {}


   async find(filter: QueryFilter<typeof OrderDetails>, options: QueryOptions<Document>) {
      return this.orderdetailsModel.find( filter, {}, options);
    }
}
