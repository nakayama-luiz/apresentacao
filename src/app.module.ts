import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ AuthorModule, MongooseModule.forRoot('mongodb://0.0.0.0/authors')],
  controllers: [],
  providers: [],
})
export class AppModule {}
