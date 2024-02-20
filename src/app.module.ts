import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
// import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PasscorsMiddleware } from './passcors/passcors.middleware';
import { SeederService } from './tasks/seeder/seeder.service';
import { SeederModule } from './tasks/seeder/seeder.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    AuthModule,
    AdminModule,
    DatabaseModule,
    SeederModule,
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    //   isGlobal: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PasscorsMiddleware).forRoutes('*');
  }
}
