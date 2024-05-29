import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Book } from '../entities/book.entity';
import { BooksSchema } from '../schemas/books.schema';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const livro = req.body.price
    req.body.price = livro*1.25
    next();
  }
}
