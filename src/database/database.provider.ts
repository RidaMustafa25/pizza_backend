import { MODEL } from './consts';
import { CategorySchema } from './schemas/category.schema';
import { ContactSchema } from './schemas/contact.schema';
import { OrderSchema } from './schemas/order.schema';
import { OrderDetailsSchema } from './schemas/order_details.schema';
import { PizzaSchema } from './schemas/pizza.schema';
import { SizeSchema } from './schemas/size.schema';
import { UserSchema } from './schemas/user.schema';

export const Models = [
  {
    name: MODEL.USER,
    schema: UserSchema,
    collection: MODEL.USER,
  },
  {
    name: MODEL.CATEGORY,
    schema: CategorySchema,
    collection: MODEL.CATEGORY,
  },
  {
    name: MODEL.SIZE,
    schema: SizeSchema,
    collection: MODEL.SIZE,
  },
  {
    name: MODEL.CONTACT,
    schema: ContactSchema,
    collection: MODEL.CONTACT,
  },
  {
    name: MODEL.PIZZA,
    schema: PizzaSchema,
    collection: MODEL.PIZZA,
  },
  // {
  //   name: MODEL.PIZZASIZE,
  //   schema: PizzaSchema,
  //   collection: MODEL.PIZZASIZE,
  // },
  {
    name: MODEL.ORDER,
    schema: OrderSchema,
    collection: MODEL.ORDER,
  },
  {
    name: MODEL.ORDERDETAILS,
    schema: OrderDetailsSchema,
    collection: MODEL.ORDERDETAILS,
  },
];