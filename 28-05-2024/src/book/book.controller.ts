import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    throw new HttpException('NOT_IMPLEMENTED', HttpStatus.NOT_IMPLEMENTED);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    try{

      return await this.bookService.findOne(id);
    }catch(error){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Livro não encontrado!',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
