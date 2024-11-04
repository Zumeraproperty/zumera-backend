import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SalesExecutive,
  SalesExecutiveDocument,
} from './schemas/sales-executive.schema';
import { CreateSalesExecutiveDto } from './dto/create-sales-executive.dto';

@Injectable()
export class SalesExecutiveService {
  constructor(
    @InjectModel(SalesExecutive.name)
    private salesExecutiveModel: Model<SalesExecutiveDocument>,
  ) {}

  async create(
    createSalesExecutiveDto: CreateSalesExecutiveDto,
  ): Promise<SalesExecutive> {
    const createdSalesExecutive = new this.salesExecutiveModel(
      createSalesExecutiveDto,
    );
    return createdSalesExecutive.save();
  }

  async findAll(): Promise<SalesExecutive[]> {
    return this.salesExecutiveModel.find().exec();
  }

  async update(
    id: string,
    updateData: CreateSalesExecutiveDto,
  ): Promise<SalesExecutive> {
    if (!this.isUpdateDataComplete(updateData)) {
      throw new BadRequestException('All fields must be provided for update');
    }

    const updatedSalesExecutive = await this.salesExecutiveModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedSalesExecutive) {
      throw new NotFoundException(`Sales Executive with ID "${id}" not found`);
    }

    return updatedSalesExecutive;
  }

  private isUpdateDataComplete(data: CreateSalesExecutiveDto): boolean {
    return !!(
      data.title &&
      data.description &&
      data.skill &&
      data.requirements
    );
  }

  async remove(id: string): Promise<SalesExecutive> {
    const deletedSalesExecutive = await this.salesExecutiveModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedSalesExecutive) {
      throw new NotFoundException(`Sales Executive with ID "${id}" not found`);
    }
    return deletedSalesExecutive;
  }
}
