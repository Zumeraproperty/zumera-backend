import { BlogService } from "./blog.service";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";
export declare class BlogController {
  private readonly blogService;
  constructor(blogService: BlogService);
  create(
    createBlogDto: CreateBlogDto,
    files: Array<Express.Multer.File>,
  ): Promise<import("./schemas/blog.schema").Blog>;
  findAll(): Promise<import("./schemas/blog.schema").Blog[]>;
  findOne(id: string): Promise<import("./schemas/blog.schema").Blog>;
  update(
    id: string,
    updateBlogDto: UpdateBlogDto,
  ): Promise<import("./schemas/blog.schema").Blog>;
  remove(id: string): Promise<import("./schemas/blog.schema").Blog>;
}
