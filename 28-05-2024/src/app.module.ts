import { MiddlewareConsumer, Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { LoggerMiddleware } from './book/common/logger.middleware';

@Module({
  imports: [BookModule, MongooseModule.forRoot('mongodb://0.0.0.0/more-books')],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('book');
  }
}
