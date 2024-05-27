import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './schema/author.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async create(createCatDto: CreateAuthorDto): Promise<Author> {
    const createdCat = new this.authorModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find();
  }
  async findOne(id: string):Promise<Author> {
    return await this.authorModel.findById(id)
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorModel.findByIdAndUpdate(id,updateAuthorDto)
  }

  async remove(id: string) {
    return await this.authorModel.findByIdAndDelete(id)
    return `This action removes a #${id} author`;
  }
}
