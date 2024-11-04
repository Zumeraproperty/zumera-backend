import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hrs, HrsDocument } from './schemas/hrs.schema';
import { CreateHrsDto } from './dto/create-hrs.dto';

@Injectable()
export class HrsService {
  constructor(
    @InjectModel(Hrs.name)
    private hrsModel: Model<HrsDocument>,
  ) {}

  async create(createHrsDto: CreateHrsDto): Promise<Hrs> {
    const createdHrs = new this.hrsModel(createHrsDto);
    return createdHrs.save();
  }

  async findAll(): Promise<Hrs[]> {
    return this.hrsModel.find().exec();
  }

  async update(id: string, updateData: CreateHrsDto): Promise<Hrs> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedHrs = await this.hrsModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedHrs) {
      throw new NotFoundException(`Hrs with ID "${id}" not found`);
    }

    return updatedHrs;
  }

  private isUpdateDataComplete(data: CreateHrsDto): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<Hrs> {
    const deletedHrs = await this.hrsModel.findByIdAndDelete(id).exec();
    if (!deletedHrs) {
      throw new NotFoundException(
        `Project Manager Executive with ID "${id}" not found`,
      );
    }
    return deletedHrs;
  }
}
