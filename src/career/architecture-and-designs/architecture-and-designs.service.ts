import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ArchitectureAndDesigns,
  ArchitectureAndDesignsDocument,
} from './schemas/architecture-and-designs.schema';
import { CreateArchitectureAndDesignsDto } from './dto/create-architecture-and-designs.dto';

@Injectable()
export class ArchitectureAndDesignsService {
  constructor(
    @InjectModel(ArchitectureAndDesigns.name)
    private architectureAndDesignsModel: Model<ArchitectureAndDesignsDocument>,
  ) {}

  async create(
    createArchitectureAndDesignsDto: CreateArchitectureAndDesignsDto,
  ): Promise<{ message: string; title: string }> {
    const createdArchitectureAndDesigns = new this.architectureAndDesignsModel(
      createArchitectureAndDesignsDto,
    );
    await createdArchitectureAndDesigns.save();
    return {
      message: `${createArchitectureAndDesignsDto.title} job created successfully`,
      title: createArchitectureAndDesignsDto.title,
    };
  }

  async findAll(): Promise<ArchitectureAndDesigns[]> {
    return this.architectureAndDesignsModel.find().exec();
  }

  async update(
    id: string,
    updateData: CreateArchitectureAndDesignsDto,
  ): Promise<ArchitectureAndDesigns> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedArchitectureAndDesigns = await this.architectureAndDesignsModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedArchitectureAndDesigns) {
      throw new NotFoundException(
        `Architecture and Designs with ID "${id}" not found`,
      );
    }

    return updatedArchitectureAndDesigns;
  }

  private isUpdateDataComplete(data: CreateArchitectureAndDesignsDto): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<ArchitectureAndDesigns> {
    const deletedArchitectureAndDesigns = await this.architectureAndDesignsModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedArchitectureAndDesigns) {
      throw new NotFoundException(
        `Architecture and Designs with ID "${id}" not found`,
      );
    }
    return deletedArchitectureAndDesigns;
  }
}
