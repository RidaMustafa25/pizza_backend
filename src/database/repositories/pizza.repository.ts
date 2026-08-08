import { Model, QueryFilter, QueryOptions, Types } from 'mongoose';
import { Pizza } from '../schemas/pizza.schema';
import { MODEL } from '../consts';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Options } from '@nestjs/common';

@Injectable()
export class PizzaRepository {
//  create(arg0: { image: any; name: string; category: string; description: string; _id: Types.ObjectId; }) {
//  throw new Error('Method not implemented.');
//  }
//  pizzaModel: any;
  constructor(
    @InjectModel(MODEL.PIZZA)
    private readonly pizzaModel: Model<Pizza>,
  ) {}


   async find(filter: QueryFilter<Pizza>, options: QueryOptions<Document>) {
      return this.pizzaModel.find( filter, {}, options);
    }

    async create(payload: Partial<Pizza>) {
      const pizza = new this.pizzaModel(payload);
      return await pizza.save();
    }
}
