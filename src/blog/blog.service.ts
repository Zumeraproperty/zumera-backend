import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const blog = new this.blogModel(createBlogDto);
    return blog.save();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async findOne(id: string): Promise<Blog> {
    return this.blogModel.findById(id).exec();
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    return this.blogModel
      .findByIdAndUpdate(id, updateBlogDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Blog> {
    return this.blogModel.findByIdAndDelete(id).exec();
  }
}
