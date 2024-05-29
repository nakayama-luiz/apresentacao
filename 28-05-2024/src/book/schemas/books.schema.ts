import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BooksDocument = HydratedDocument<Books>;

@Schema()
export class Books {
  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;
}

export const BooksSchema = SchemaFactory.createForClass(Books);