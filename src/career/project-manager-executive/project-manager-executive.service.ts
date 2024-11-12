import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProjectManagerExecutive,
  ProjectManagerExecutiveDocument,
} from './schemas/project-manager-executive.schema';
import { CreateProjectManagerExecutiveDto } from './dto/create-project-manager-executive.dto';

@Injectable()
export class ProjectManagerExecutiveService {
  constructor(
    @InjectModel(ProjectManagerExecutive.name)
    private projectManagerExecutiveModel: Model<ProjectManagerExecutiveDocument>,
  ) {}

  async create(
    createProjectManagerExecutiveDto: CreateProjectManagerExecutiveDto,
  ): Promise<{ message: string; title: string }> {
    const createdProjectManagerExecutive =
      new this.projectManagerExecutiveModel(createProjectManagerExecutiveDto);
    await createdProjectManagerExecutive.save();
    return {
      message: `${createProjectManagerExecutiveDto.title} job created successfully`,
      title: createProjectManagerExecutiveDto.title,
    };
  }

  async findAll(): Promise<ProjectManagerExecutive[]> {
    return this.projectManagerExecutiveModel.find().exec();
  }

  async update(
    id: string,
    updateData: CreateProjectManagerExecutiveDto,
  ): Promise<ProjectManagerExecutive> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedProjectManagerExecutive =
      await this.projectManagerExecutiveModel
        .findByIdAndUpdate(id, updateData, { new: true })
        .exec();

    if (!updatedProjectManagerExecutive) {
      throw new NotFoundException(
        `Project Manager Executive with ID "${id}" not found`,
      );
    }

    return updatedProjectManagerExecutive;
  }

  private isUpdateDataComplete(
    data: CreateProjectManagerExecutiveDto,
  ): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<ProjectManagerExecutive> {
    const deletedProjectManagerExecutive =
      await this.projectManagerExecutiveModel.findByIdAndDelete(id).exec();
    if (!deletedProjectManagerExecutive) {
      throw new NotFoundException(
        `Project Manager Executive with ID "${id}" not found`,
      );
    }
    return deletedProjectManagerExecutive;
  }
}
