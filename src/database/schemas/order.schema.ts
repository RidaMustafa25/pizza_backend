import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { MODEL } from '../consts';

@Schema({})
export class OrderEntity {
  @Prop({ type: SchemaTypes.ObjectId })
  _id?: Types.ObjectId;
  
  @Prop({ type: SchemaTypes.ObjectId, ref: MODEL.USER })
  user: Types.ObjectId | string;

  @Prop({ type: Number, default: 1 })
  status?: number; // 0 = DELETE, 1 = ACTIVE, 2 = Inactive

  @Prop({ type: Date, default: Date.now() })
  created_at?: Date;

  @Prop({ type: Date, default: Date.now() })
  updated_at?: Date;
}

export const OrderSchema = SchemaFactory.createForClass(OrderEntity);