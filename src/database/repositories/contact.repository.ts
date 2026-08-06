import { Model, Types } from 'mongoose';
import { Contact } from '../schemas/contact.schema';
import { MODEL } from '../consts';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactRepository {
  create(arg0: { name: string; email: string; message: string; _id: Types.ObjectId; }) {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(MODEL.CONTACT)
    private readonly contactModel: Model<Contact>,
  ) {}
}
