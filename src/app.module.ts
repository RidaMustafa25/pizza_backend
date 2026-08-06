import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';


import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './common/guard';
import { ExceptionsFilter } from './common/filter';
import { TransformInterceptor } from './common/interceptor';
import { PizzasModule } from './pizzas/pizzas.module';
import { ContactModule } from './database/contact/contact.module';
import { CategoryModule } from './database/category/category.module';
import { SizeModule } from './database/size/size.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ContactModule,
    AuthModule,
    CategoryModule,
    SizeModule,
    PizzasModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_FILTER, useClass: ExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}