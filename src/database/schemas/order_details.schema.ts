import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { MODEL } from '../consts';

@Schema({})
export class OrderDetailsSchema {
  @Prop({ type: SchemaTypes.ObjectId })
  _id?: Types.ObjectId;
  
  @Prop({ type: SchemaTypes.ObjectId,  ref: MODEL.ORDER })
  order: Types.ObjectId | string;

  @Prop({ type: SchemaTypes.ObjectId,  ref: MODEL.PIZZA })
  pizza: Types.ObjectId | string;

  @Prop({ type: SchemaTypes.ObjectId,  ref: MODEL.SIZE })
  size: Types.ObjectId | string;

  @Prop({ type: String, allowNull: false })
  quantity: string;

  @Prop({ type: String, allowNull: false })
  price: string;

  @Prop({ type: String, allowNull: false })
  total: string;

  @Prop({ type: Number, default: 1 })
  status?: number; // 0 = DELETE, 1 = ACTIVE, 2 = Inactive

  @Prop({ type: Date, default: Date.now() })
  created_at?: Date;

  @Prop({ type: Date, default: Date.now() })
  updated_at?: Date;
}

export const OrderDetails = SchemaFactory.createForClass(OrderDetailsSchema);
