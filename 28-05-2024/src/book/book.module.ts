import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Books, BooksSchema} from './schemas/books.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
