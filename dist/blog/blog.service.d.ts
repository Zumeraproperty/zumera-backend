import { Model } from "mongoose";
import { Blog } from "./schemas/blog.schema";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";
export declare class BlogService {
  private readonly blogModel;
  constructor(blogModel: Model<Blog>);
  create(createBlogDto: CreateBlogDto): Promise<Blog>;
  findAll(): Promise<Blog[]>;
  findOne(id: string): Promise<Blog>;
  update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog>;
  remove(id: string): Promise<Blog>;
}
