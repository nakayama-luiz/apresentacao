import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Books } from './schemas/books.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Books.name) private authorModel: Model<Books>) {}

  create(createBookDto: CreateBookDto) {
    const createdCat = new this.authorModel(createBookDto);
    return createdCat.save();
  }

  findAll() {
    
    return `This action returns all book`;
  }

  findOne(id: string) {
      return this.authorModel.findById(id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
